import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Reservation } from './model/Reservation';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiServer: string = 'http://127.0.0.1:8081/Event/api/reservation/';
  private baseURL: string = 'http://127.0.0.1:8081/Event/api/user/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private _http: HttpClient ) {}

    getAllReservation(): Observable<Reservation[]> {
    return this._http.get<[Reservation]>(this.apiServer + 'getAlll', this.httpOptions);
  }


    deleteReservation(id: number) {
    const url = `${this.apiServer}delete/${id}`;
    return this._http.delete(url, this.httpOptions);
  }

    addReservation(reservation: Reservation) {
    return this._http.post<Reservation>(this.apiServer + 'add', reservation, this.httpOptions);  }


    updateReservation(reservation: Reservation) {
    return this._http.put<Reservation>(this.apiServer + 'update', reservation, this.httpOptions);  }

     


    getReservationById(idReserv: number): Observable<Reservation>{
        const url = `${this.baseURL + "get"}/${idReserv}`;
        return this._http.get<Reservation>(url, this.httpOptions)
}

exportUniversitesPdf(): Observable<Blob> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/pdf' }),
    responseType: 'blob' as 'json' // Spécifiez le type de réponse en tant que blob
  };

  return this._http.get<Blob>(this.apiServer + 'pdf', httpOptions);
}

getMonthlyReservationCounts(year: number) {
  return this._http.get(`${this.apiServer}statistics/${year}`);
}
statReservationParEvenement(): Observable<any>{
  return this._http.get<any>(`${this.apiServer}statReservationParEvent`);
}

}
