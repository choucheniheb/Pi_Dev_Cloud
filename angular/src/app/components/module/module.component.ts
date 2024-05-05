import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ModuleService } from 'src/app/service/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {
  modules: any= [];
  searchTerm: string = '';
  

  constructor(private serviceModule: ModuleService, private router: Router,private sanitizer: DomSanitizer) {}

  ngOnInit(){
    this.getAllOptions();
  }



  getAllOptions(){
    this.serviceModule.retrieveAllModules().subscribe((res)=>{
      console.log(res);
      this.modules=res;
      

    })
  }

  removeSpecialite(id:number){
    this.serviceModule.removeModule(id).subscribe((res)=>{console.log(res);
      this.getAllOptions();
    })
  }

}
