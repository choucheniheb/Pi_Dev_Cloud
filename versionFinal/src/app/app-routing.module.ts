import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';
import { TicketComponent } from './ticket/ticket.component';

import { StatReservationComponent } from './stat-reservation/stat-reservation.component';
import { AvisComponent } from './avis/avis.component';

const routes: Routes = [
    {path:"evenement",component:EventComponent},
    {path:"createEvent",component: CreateEventComponent},
    {path:"modifEvent/:id",component: UpdateEventComponent},
    {path:"reservation",component: ReservationsComponent},
    {path:"reservationMod/:id",component: ReservationUpdateComponent},
    {path:"avis",component: AvisComponent},
   
    {path:"ticket",component: TicketComponent},
    { path: 'statEtudiant', component: StatReservationComponent}

  




    




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
