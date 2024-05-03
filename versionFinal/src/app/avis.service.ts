import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Avis } from './model/Avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private apiServer: string = 'http://127.0.0.1:8081/Event/Avis/';
  private baseURL: string = 'http://127.0.0.1:8081/Event/api/user/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })}

  constructor(private _http: HttpClient) {}
  
  getAllAvis(): Observable<Avis[]> {
    return this._http.get<[Avis]>(this.apiServer + 'retrieve-all-avis', this.httpOptions);
  }
  deleteAvis(id: number) {
    const url = `${this.apiServer}remove-avis/${id}`;
    return this._http.delete(url, this.httpOptions);
  }
      getReservationById(idAvis: number): Observable<Avis>{
        const url = `${this.baseURL + "retrieve-avis"}/${idAvis}`;
        return this._http.get<Avis>(url, this.httpOptions)
}

}
