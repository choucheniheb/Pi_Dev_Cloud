import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})


export class ModuleService {

  constructor(private http: HttpClient) { }

  

  retrieveAllModules(): Observable<any>{
    return this.http.get(BASIC_URL + `projectorientation/module/retrieve-all-Modules`);
  }
  retrieveModule(optionId: number): Observable<any>{
    return this.http.get(BASIC_URL + `projectorientation/module/retrieve-Module/${optionId}`);
  }

  addModule(option : any): Observable<any>{
    return this.http.post(BASIC_URL + `projectorientation/module/add-Module`, option);
  }

  removeModule(id: number):Observable<any> {
    return this.http.delete  (BASIC_URL + 'projectorientation/module/remove-Module/'+id);
   
  }
  modifyModule(id : number, option:any) : Observable<any> {
    return this.http.put  (BASIC_URL + 'projectorientation/module/modify-Module'+id, option);
   
  }
}
