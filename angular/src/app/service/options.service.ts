import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASIC_URL = 'http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
  constructor(private http: HttpClient) { }
  getAllOptions(): Observable<any>{
    return this.http.get(BASIC_URL + `projectorientation/specialite/retrieve-all-Specialites`);
  }
  getOptionById(optionId: number): Observable<any>{
    return this.http.get(BASIC_URL + `projectorientation/specialite/retrieve-Specialite/${optionId}`);
  }

  addSpecialite(option : any): Observable<any>{
    return this.http.post(BASIC_URL + `projectorientation/specialite/add-Specialite`, option);
  }

  removeSpecialite(id: number):Observable<any> {
    return this.http.delete  (BASIC_URL + 'projectorientation/specialite/remove-Specialite/'+id);
   
  }
  modifySpecialite(id : number, option:any) : Observable<any> {
    return this.http.put  (BASIC_URL + 'projectorientation/specialite/modify-Specialite/'+id, option);
   
  }

}
