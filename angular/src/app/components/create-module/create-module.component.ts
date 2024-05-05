import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModuleService } from 'src/app/service/module.service';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent {

  moduleForm! : FormGroup;


  image: File | null = null;
  imageMin: File | null = null;
  uploadingFile:boolean=false;
  matiers: string[] = ['MATH', 'SQL', 'FR','RESEAU'];

   

 constructor(
  private moduleService: ModuleService,
  private router: Router,
  private formBuilder: FormBuilder,
  private http: HttpClient // Ajout de HttpClient
) {}

ngOnInit(): void {
  this.moduleForm = this.formBuilder.group({
    nom: ['', [Validators.required, Validators.minLength(4)]],
    coefficient: [0, [Validators.required, this.containsNumberValidator]],
    matier: ['', [Validators.required]],
    
  });
}

  containsNumberValidator(control: AbstractControl) {
    const value = control.value;
    const containsNumber = /\d/.test(value);
    return containsNumber ? { containsNumber: true } : null;
  }

  
  

  postevent(){

    console.log(this.moduleForm.value);
    this.moduleService.addModule(this.moduleForm.value).subscribe((res)=>{console.log(res)
    this.router.navigateByUrl("/modules")  
    })
  }

}
