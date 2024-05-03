import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { Event } from 'src/app/model/Event';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any= [];
  searchTerm: string = '';
  creatingMode: boolean = true;

  constructor(private serviceEvent: EventService, private router: Router,private sanitizer: DomSanitizer) {}

  onDeleteBloc(event: Event) {
    if (confirm("Voulez-vous supprimer l'événement ?")) {
      if (event.id !== undefined) {
        this.serviceEvent.deleteEvent(event.id).subscribe(() => {
          this.router.navigate(['/evenement']).then(() => {
            window.location.reload();
          });
        });
      }
    }
  }

  ngOnInit(): void {
    this.loadUniversites();
  }
  
  searchSynonyms() {
    this.serviceEvent.getAllEvent().subscribe((res) => {
      this.events = res.filter((event: any) =>
        event.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      event.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        event.lieu.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        event.id.toString().includes(this.searchTerm) ||
        event.nbrPlace.toString().includes(this.searchTerm)
      );
    });
  }

  loadUniversites() {
    
    this.serviceEvent.getAllEvent().subscribe(
      data => {
        this.events = data as Event[];
        console.log('Event:', data);
      },
      error => {
        console.error('Erreur lors de la récupération des événements', error);
      }
    );
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}


newEvent: Event = new Event();




openModel(event: Event = new Event()) {
  console.log('test');
  
  if (event.id == 0) {
    this.events = new Event();
  } else {
    this.creatingMode = false;
    this.events = event;
  }
}

}









