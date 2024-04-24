import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASE_URL = ["http://localhost:8089/projetpi/"]
@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor(private http: HttpClient) { }
  register (signRequest:any): Observable<any>
  {

    return this.http.post(BASE_URL+'user/add-User',signRequest)

  }
  login (loginRequest:any): Observable<any>
  {

    return this.http.post(BASE_URL+`user/auth`, loginRequest);

  }
  hello (): Observable<any>
  {

    return this.http.get(BASE_URL+`api/hello` ,{
      headers: this.createAuhtorizationHeader()
    });

  }

  private createAuhtorizationHeader()
  {
    const jwtToken = localStorage.getItem('jwtToken');
    if(jwtToken)
      {
        console.log("jwt token found in local storage",jwtToken);
        return new HttpHeaders().set(
          "Authorization","Bearer" + jwtToken
        )
      }else
      {
        console.log("jwt token not found in local storage");

      }
      return ;
  }
}
