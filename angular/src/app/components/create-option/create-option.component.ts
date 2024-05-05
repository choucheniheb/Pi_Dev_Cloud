import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { OptionsService } from 'src/app/service/options.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-option',
  templateUrl: './create-option.component.html',
  styleUrls: ['./create-option.component.css']
})
export class CreateOptionComponent {

  optionForm! : FormGroup;
  selectedFile: File | null = null;

 
  imageMin: File | null = null;
  uploadingFile:boolean=false;
  Categories: string[] = ['TC', 'IT', 'GL','GE'];

   

 constructor(
  private optionService: OptionsService,
  private router: Router,
  private formBuilder: FormBuilder,
  private http: HttpClient // Ajout de HttpClient
) {}

ngOnInit(): void {
  this.optionForm = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(4), this.containsNumberValidator]],
    description: ['', [Validators.required, Validators.minLength(4)]],
    categorieSpecialite: ['', [Validators.required]],
  });

}

  containsNumberValidator(control: AbstractControl) {
    const value = control.value;
    const containsNumber = /\d/.test(value);
    return containsNumber ? { containsNumber: true } : null;
  }

  
  

  postevent(){

    console.log(this.optionForm.value);
    this.optionService.addSpecialite(this.optionForm.value).subscribe((res)=>{console.log(res)
    this.router.navigateByUrl("/all")  
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadPDFFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
  
    return this.http.post('http://localhost:8080/projectorientation/upload/pdf', formData);
  }
  

}
