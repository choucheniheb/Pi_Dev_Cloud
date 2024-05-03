import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateEventComponent } from './update-event/update-event.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';
import { TicketComponent } from './ticket/ticket.component';

import { StatReservationComponent } from './stat-reservation/stat-reservation.component';
import { AvisComponent } from './avis/avis.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    EventComponent,
    CreateEventComponent,
    UpdateEventComponent,
    ReservationsComponent,
    ReservationUpdateComponent,
    TicketComponent,
    StatReservationComponent,
    AvisComponent,
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }