import { Component } from '@angular/core';
import { Ticket } from '../model/Ticket';
import { TicketService } from '../ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  tickets: Ticket[] = [];
  searchTerm: string = '';
 
  constructor(private ticketService: TicketService, private router: Router) {}

  onDeleteBloc(ticket: Ticket) {
    if (confirm("Voulez-vous supprimer un ticket ?")) {
      if (ticket.id !== undefined) {
        this.ticketService.deleteTicket(ticket.id).subscribe(() => {
          this.router.navigate(['/ticket']).then(() => {
            window.location.reload();
          });
        });
      }
    }
  }
  searchSynonyms() {
    this.ticketService.getAll().subscribe((res) => {
      this.tickets = res.filter((ticket: any) =>
        ticket.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        ticket.id.toString().includes(this.searchTerm) ||
        ticket.numero.toString().includes(this.searchTerm)
      );
    });
  }

  ngOnInit(): void {
    this.loadUniversites();
  }

  loadUniversites() {
    this.ticketService.getAll().subscribe(
      data => {
        this.tickets = data as Ticket[];
        console.log('Ticket:', data);
      },
      error => {
        console.error('Erreur lors de la récupération des ticket', error);
      }
    );
  }

}
