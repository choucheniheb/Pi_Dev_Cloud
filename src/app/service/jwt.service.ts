// src/app/services/jwt.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/auth`, credentials);
  }
  saveToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('jwtToken');
  }

  createAuthorizationHeader(): HttpHeaders {
    const jwtToken = this.getToken();
    return new HttpHeaders({ Authorization: `Bearer ${jwtToken}` });
  }
  register(signRequest: any): Observable<any> {
    return this.http.post(BASE_URL + 'user/add-User', signRequest);
  }
  getAllUser(): Observable<any> {
    return this.http.get(BASE_URL + 'user/retrieve-all-Users');
  }

  modifyEtatUser(userId: any, etat: any): Observable<any> {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('etat', etat);
    return this.http.put(`${BASE_URL}user/modify-etat-User`, formData);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(BASE_URL + `user/remove-User/${id}`);
  }
  updateUser(user: any): Observable<any> {
    return this.http.put(`${BASE_URL}user/modify-User`, user);
  }
  getUserById(id: any): Observable<any> {
    return this.http.get(`${BASE_URL}user/retrieve-User/${id}`);
  }
}
