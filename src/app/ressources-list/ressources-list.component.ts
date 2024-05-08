import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Ressources } from '../ressources';
import { RessourcesService } from 'src/app/service/ressources.service';

@Component({
  selector: 'app-ressources-list',
  templateUrl: './ressources-list.component.html',
  styleUrls: ['./ressources-list.component.css']
})
export class RessourcesListComponent implements OnInit {
  ressourcesList: Ressources[] = [];
  subjectId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { ressources: any[], subjectId: number },
    private ressourcesService: RessourcesService
  ) {
    this.ressourcesList = data.ressources;
    this.subjectId = data.subjectId;
  }

  ngOnInit(): void {
    const subjectId = this.subjectId; // Use the subjectId from the data object
    this.fetchRessourcesList(subjectId);
  }

  fetchRessourcesList(subjectId: number): void {
    this.ressourcesService.getRessourcesBySubject(subjectId).subscribe(
      (ressources: Ressources[]) => {
        this.ressourcesList = ressources.map(ressource => {
          // Update each resource item with the URL, fileData, and subject
          const url = `/api/v1/ressources/getimagebyname/${ressource.ressourceName}`;
          return new Ressources(
            ressource.id_ressources,
            ressource.ressourceName,
            ressource.ressource_type,
            ressource.fileData,
            ressource.subject
          );
        });
      },
      (error: any) => {
        console.error('Error while fetching resources list:', error);
      }
    );
  }

  downloadResource(ressource: Ressources): void {
    const link = document.createElement('a');
    link.href = ressource.fileData;
    link.download = ressource.ressourceName;
    link.target = '_blank';
    link.click();
  }
}