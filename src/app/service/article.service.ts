import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = 'http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  createNewPost(data:any): Observable<any>{
    return this.http.post(BASIC_URL + `api/article`, data);
  }

  getAllArticles(): Observable<any>{
    return this.http.get(BASIC_URL + `api/article`);
  }

  getArticleById(articleId: number): Observable<any>{
    return this.http.get(BASIC_URL + `api/article/${articleId}`);
  }
}
