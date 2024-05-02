import { Component } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';
import { ServicebysubjectComponent } from '../servicebysubject/servicebysubject.component';
import { MatDialog } from '@angular/material/dialog';
import { RessourcesListComponent } from '../ressources-list/ressources-list.component';
import { RessourcesService } from '../service/ressources.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent {
  allSubjects: any[] = [];
  currentPage: number = 1;
  totalPageNumber = 0;

  constructor(
    private subjectService: SubjectService,
    private dialog: MatDialog,
    private ressourcesService: RessourcesService // Inject RessourcesService here
  ) {}

  ngOnInit() {
    this.getAllSubjects(this.currentPage);
  }

  getAllSubjects(page: number) {
    this.subjectService.getSubjects().subscribe(
      (subjects: any[]) => {
        this.allSubjects = subjects;
        console.log('Received subjects:', this.allSubjects);
      },
      (error) => {
        console.error('Error while fetching subjects:', error);
      }
    );
  }

  deleteSubject(subjectId: number) {
    console.log("id kahla", subjectId);
    this.subjectService.deleteSubject(subjectId).subscribe(
      () => {
        this.getAllSubjects(this.currentPage);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  
  getServicesBySubjectIds(subjectIds: number[]): void {
    const dialogRef = this.dialog.open(ServicebysubjectComponent, {
      width: '800px',
      data: { subjectIds }
    });
  }

  getRessourcesBySubject(subjectId: number): void {
    this.ressourcesService.getRessourcesBySubject(subjectId).subscribe(
      (ressources: any[]) => {
        const dialogRef = this.dialog.open(RessourcesListComponent, {
          width: '800px',
          data: { ressources }
        });
      },
      (error: any) => {
        console.error('Error while fetching resources:', error);
      }
    );
  }
}