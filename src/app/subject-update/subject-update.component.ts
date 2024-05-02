import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/service/subject.service';
import { Subject } from '../subject';
import { Service } from '../service';
import { Ressources } from '../ressources';




@Component({
  selector: 'app-subject-update',
  templateUrl: './subject-update.component.html',
  styleUrls: ['./subject-update.component.css']
})
export class SubjectUpdateComponent implements OnInit {
  updateSubjectForm!: FormGroup;
  subjectId!: number;

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.subjectId = +this.route.snapshot.paramMap.get('id')!;
    this.updateSubjectForm = this.fb.group({
      subjectName: ['', Validators.required],
    });

    this.subjectService.getSubjectById(this.subjectId).subscribe(
      (subject: Subject) => {
        this.updateSubjectForm.patchValue({
          subjectName: subject.subject_name,
        });
      },
      (error) => {
        console.error('Error fetching subject details:', error);
      }
    );
  }

  updateSubject() {
    if (this.updateSubjectForm.valid) {
      const formData = this.updateSubjectForm.value;
      const updatedSubject: Subject = {
        subject_id: this.subjectId,
        subject_name: formData.subjectName,
        ressources: [], // Assuming you have an array of Ressources
        services: [] // Assuming you have an array of Service
        // Add other properties as needed
      };
  
      this.subjectService.updateSubject(this.subjectId, updatedSubject).subscribe(
        () => {
          console.log('Subject updated successfully');
          // Navigate back to the list of subjects
          this.router.navigate(['/subject-list']);
        },
        (error) => {
          console.error('Error updating subject:', error);
          // Handle error here, display a message to the user, etc.
        }
      );
    }
  }
  
}
