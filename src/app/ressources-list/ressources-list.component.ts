import { Component, OnInit } from '@angular/core';
import { Ressources } from '../ressources';
import { RessourcesService } from 'src/app/service/ressources.service';

@Component({
  selector: 'app-ressources-list',
  templateUrl: './ressources-list.component.html',
  styleUrls: ['./ressources-list.component.css']
})
export class RessourcesListComponent implements OnInit {
  ressourcesList: Ressources[] = [];

  constructor(private ressourcesService: RessourcesService) { }

  ngOnInit(): void {
    const subjectId = 123; // Replace with the actual subject ID
    this.fetchRessourcesList(subjectId);
  }

  fetchRessourcesList(subjectId: number): void {
    this.ressourcesService.getRessourcesBySubject(subjectId).subscribe(
      (ressources: Ressources[]) => {
        this.ressourcesList = ressources;
      },
      (error: any) => {
        console.error('Error while fetching ressources list:', error);
      }
    );
  }

 
}