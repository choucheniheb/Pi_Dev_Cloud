import { Component } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent {
  id!: number;
  reservationForm: FormGroup;

  constructor(
    private reservationService: ReservationService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.reservationForm = this.formBuilder.group({
      nom_reserv: ['', Validators.required],
      date_reser: ['', Validators.required],
      nom: ['', Validators.required],


    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Utilisez le + pour convertir en nombre
    this.reservationService.getReservationById(this.id).subscribe(
      data => {
        this.reservationForm.patchValue(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log('Submit button clicked!');
    if (this.reservationForm.valid) {
      const updateReservation = { ...this.reservationForm.value, id: this.id };
      this.reservationService.updateReservation(updateReservation).subscribe(
        data => {
          this.goToEventList();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  goToEventList() {
    this.router.navigate(['/reservation']); // Utilisez la même route que pour la liste des événements
  }

}
