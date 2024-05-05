import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


import { OptionsService } from 'src/app/service/options.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-option',
  templateUrl: './update-option.component.html',
  styleUrls: ['./update-option.component.css']
})
export class UpdateOptionComponent {


  optionForm! : FormGroup;

  updateoptionForm!: FormGroup;
  id:number = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute:ActivatedRoute,
    private service:OptionsService,
    private formBuilder:FormBuilder,
    private router: Router){}


  ngOnInit(){
    this.updateoptionForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(4), this.containsNumberValidator]],
      description: ['', [Validators.required, Validators.minLength(4)]],
      pdfFile: ['', [Validators.required]],
     
    })
    this.getOptionById();
    this.modifySpecialite();
  }
  
  getOptionById(){
    this.service.getOptionById(this.id).subscribe((res)=>{console.log(res)
    this.updateoptionForm.patchValue(res); //tchargili les données fel fiels
  }) 
  }

  modifySpecialite(){
    this.service.modifySpecialite(this.id,this.updateoptionForm.value).subscribe((res)=>{
      console.log(res)
        this.router.navigateByUrl("/all");

    })
  }

  containsNumberValidator(control: AbstractControl) {
    const value = control.value;
    const containsNumber = /\d/.test(value);
    return containsNumber ? { containsNumber: true } : null;
  }
}
