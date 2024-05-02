import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private apiUrl = 'http://localhost:8080/api/v1/rating/count-by-rating';

  constructor(private http: HttpClient) { }

  getServicesByRating(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
