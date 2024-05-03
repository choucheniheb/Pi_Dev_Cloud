import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../model/Event';


@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  id!: number;
  eventForm: FormGroup;
  imgURL: any;
 // image things ***************************
 image: File | null = null;
 imageMin: File | null = null;
 uploadingFile:boolean=false;
 //***************************************** */
event:Event = { 
   id: 0,
   nom: "",
   nbrPlace: 0,
   date_fin: new Date,
   date_deb: new Date,
   lieu: "",
   imagecloud: null

}

  constructor(
    private eventService: EventService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.eventForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      type: ['', [Validators.required, Validators.minLength(2)]],
      nbrPlace: ['', [Validators.required, Validators.minLength(2)]],
      date_deb: ['', Validators.required],
      date_fin: ['', Validators.required],
      lieu: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Utilisez le + pour convertir en nombre
    this.eventService.getEvent(this.id).subscribe(
     data => {
      console.log(this.id)
      console.log(data)
      this.event.id=this.id
      this.eventForm.setValue({
    nom:data.nom,
    type:data.type,
    lieu: data.lieu,
    date_deb: data.date_deb,
    date_fin:data.date_fin,
    nbrPlace:data.nbrPlace,
    
      })
      console.log(this.eventForm.value)
    }
    );
 


 



    

  }
  

  onSubmit() {

    console.log('Submit button clicked!');
    if (this.eventForm.valid) {
      //const updatedEvent = { ...this.eventForm.value, id: this.id };
      this.event.nom=this.eventForm.value.nom
      this.event.type=this.eventForm.value.type
          this.event.lieu=this.eventForm.value.lieu
          this.event.nbrPlace=this.eventForm.value.nbrPlace
          this.event.date_deb=this.eventForm.value.date_deb
          this.event.date_fin=this.eventForm.value.date_fin
        
          this.eventService.upload(this.image).subscribe((data)=>
          {

            this.event.imagecloud=data
     
      
            this.eventService.updateEvent(this.event).subscribe(
              data => {
                this.goToEventList();
              },
              error => {
                console.log(error);
              }
            );
      // Optionally, you can perform other actions after submission
    });

      /* 
      this.eventService.updateEvent(this.event).subscribe(
        data => {
          this.goToEventList();
        },
        error => {
          console.log(error);
        }
      ); */
    }
  }

  goToEventList() {
    this.router.navigate(['/evenement']); // Utilisez la même route que pour la liste des événements
  }
  onFileChangeClou(event: any) {
    this.image = event.target.files[0];
    this.imageMin = null;
    const fr = new FileReader();
    fr.onload = (evento: any) => {
      this.imageMin = evento.target.result;
    };
    if (this.image) {
      fr.readAsDataURL(this.image);
    }
  }
}