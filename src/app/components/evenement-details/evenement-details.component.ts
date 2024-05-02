import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvisService } from 'src/app/service/avis.service';
import { EvenementService } from 'src/app/service/evenement.service';

@Component({
  selector: 'app-evenement-details',
  templateUrl: './evenement-details.component.html',
  styleUrls: ['./evenement-details.component.css'],
})
export class EvenementDetailsComponent {
  eventId = this.activatedRoute.snapshot.params['id'];
  eventData: any;
  avis: any;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private evenementService: EvenementService,
    private avisService: AvisService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getEventById();
    this.getAvisByEvent();
  }
  getEventById() {
    this.evenementService.getEvent(this.eventId).subscribe(
      (res) => {
        this.eventData = res;
        console.log(res);
      },
      (error) => {
        console.log('Event not found');
      }
    );
  }

  getAvisByEvent() {
    this.avisService.getAvisByEvent(this.eventId).subscribe(
      (res) => {
        this.avis = res;
        console.log(res);
      },
      (error) => {
        console.log('Avis not found');
      }
    );
  }
}
