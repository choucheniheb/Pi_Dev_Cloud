import { Component } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent {
  subjectName: string = '';

  constructor(private subjectService: SubjectService) {}

  addSubject() {
    const newSubject: Subject = {
      subject_id: 0,
      subject_name: this.subjectName,
      ressources: [],
      services: []
    };

    this.subjectService.createNewSubject(newSubject).subscribe(
      () => {
        this.subjectService.getSubjects();
        this.subjectName = '';
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
