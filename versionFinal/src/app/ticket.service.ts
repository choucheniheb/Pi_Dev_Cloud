import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from './model/Ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiServer: string = 'http://127.0.0.1:8081/Event/api/ticket/';
  private baseURL: string = 'http://127.0.0.1:8081/Event/api/user/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private _http: HttpClient) { }
  getAll(): Observable<Ticket[]> {
    return this._http.get<[Ticket]>(this.apiServer + 'getAll', this.httpOptions);
  }


  deleteTicket(id: number) {
    const url = `${this.apiServer}delete/${id}`;
    return this._http.delete(url, this.httpOptions);
  }

  addTicket(ticket: Ticket) {
    return this._http.post<Ticket>(this.apiServer + 'add', ticket, this.httpOptions);  }


    updateTicket(ticket: Ticket) {
    return this._http.put<Ticket>(this.apiServer + 'update', ticket, this.httpOptions);  }

     


    getTicket(idTicket: number): Observable<Ticket>{
        const url = `${this.baseURL + "get"}/${idTicket}`;
        return this._http.get<Ticket>(url, this.httpOptions)

}
}
