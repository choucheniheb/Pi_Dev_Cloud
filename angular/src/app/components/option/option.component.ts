import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { OptionsService } from 'src/app/service/options.service';


@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent {

  options: any= [];
  searchTerm: string = '';
  

  constructor(private serviceoption: OptionsService, private router: Router,private sanitizer: DomSanitizer) {}

  ngOnInit(){
    this.getAllOptions();
  }



  getAllOptions(){
    this.serviceoption.getAllOptions().subscribe((res)=>{
      console.log(res);
      this.options=res;
      

    })
  }

  removeSpecialite(id:number){
    this.serviceoption.removeSpecialite(id).subscribe((res)=>{console.log(res);
      this.getAllOptions();
    })
  }


}
