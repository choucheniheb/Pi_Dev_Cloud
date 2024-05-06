import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css'],
})
export class CreateServiceComponent {
  serviceForm!: FormGroup;
  allSubject: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serviceService: ServiceService,
    private subjectService: SubjectService
  ) {}

  ngOnInit() {
    this.serviceForm = this.fb.group({
      serviceName: [null, Validators.required],
      serviceDescription: [null, Validators.required],
      subject: [null, Validators.required],
    });
    this.getAllSubject();
  }

  getAllSubject() {
    this.subjectService.getSubjects().subscribe(
      (res) => {
        console.log(res);
        this.allSubject = res;
      },
      (error) => {
        console.log('Error while fetching Subject');
      }
    );
  }

  createService() {
    const data = {
      serviceName: this.serviceForm.value.serviceName,
      serviceDescription: this.serviceForm.value.serviceDescription,
      subject: {
        subjectId: this.serviceForm.value.subject,
      },
    };
    console.log(data);
    this.serviceService.addNewService(data).subscribe(
      (res) => {
        console.log('Your Service was created successfully', 'Ok');
        this.router.navigateByUrl('/dashboard/all-subject');
      },
      (error) => {
        console.log('Error creating the Service', 'Ok');
      }
    );
  }
}
