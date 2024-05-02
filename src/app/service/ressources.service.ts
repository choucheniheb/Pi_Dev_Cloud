import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ressources } from '../ressources';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {
  private apiUrl = 'http://localhost:8080/api/v1/ressources'; // Replace with your API URL

  constructor(private http: HttpClient) { }


  getRessourcesBySubject(subjectId: number): Observable<Ressources[]> {
    return this.http.get<Ressources[]>(`${this.apiUrl}/getressourcesbysubject/${subjectId}`);
  }


  uploadImage(file: File, subjectId: number): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('subjectId', subjectId.toString());

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<any>(`${this.apiUrl}/uploadimage`, formData, { headers });
  }

  downloadRessource(ressourceId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${ressourceId}`, {
      responseType: 'blob'
    });
  }
}