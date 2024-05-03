import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Avis } from '../model/Avis';
import { AvisService } from '../avis.service';

@Component({
  selector: 'app-create-avis',
  templateUrl: './create-avis.component.html',
  styleUrls: ['./create-avis.component.css']
})
export class CreateAvisComponent {

   
  avisForm!: FormGroup;
  aviis: any= [];
  eventId!: number;
  contenu: string = '';
  avis: Avis[]=[];

  constructor(
    private avisService: AvisService,
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient ,// Ajout de HttpClient
    private route: ActivatedRoute // Injectez ActivatedRoute ici

  ) {}
  ngOnInit(): void {
    this.avisForm = this.formBuilder.group({
      contenu: ['', [Validators.required]], // Correction ici: Ajout du crochet fermant
     
    });
    this.route.params.subscribe(params => {
      this.eventId = +params['id']; // Le '+' convertit la valeur en nombre
    });
  }
  
  saveEvent(idEvent: number) { // Assurez-vous de passer l'idEvent en tant que paramètre à cette méthode
    if (this.avisForm.valid) {
      this.avisService.addAvisAndAssignEvent(this.avisForm.value, this.eventId).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/liste']);
        },
        (error) => console.error('Error:', error)
      );
    } else {
      console.error('Le formulaire n\'est pas valide.');
    }
  }
  

  onSubmit() {
    if (this.avisForm.valid) {
      console.log(this.avisForm.value);
      this.saveEvent(this.aviis); // Utilisez la propriété eventId lors de l'appel de saveEvent
    } else {
      console.log('Le formulaire n\'est pas valide. Veuillez remplir tous les champs correctement.');
    }
  }
}
