import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from '../model/Avis';

@Injectable({
  providedIn: 'root',
})
export class AvisService {
  private apiUrl = 'http://localhost:8080/Avis/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  addAvisAndAssignEvent(avis: Avis, idEvent: number): Observable<Avis> {
    return this.http.post<Avis>(`${this.apiUrl}assign/${idEvent}`, avis);
  }

  getEvent(idEvent: number): Observable<Event> {
    const url = `${this.apiUrl + 'get'}/${idEvent}`;
    return this.http.get<Event>(url, this.httpOptions);
  }

  getAvisByEvent(idEvent: number): Observable<any> {
    const url = `${this.apiUrl + 'retrieve-avis-by-event'}/${idEvent}`;
    return this.http.get<any>(url, this.httpOptions);
  }
}
