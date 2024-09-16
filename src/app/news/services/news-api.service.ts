import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = '5fbd0daf453c45429bf06c54bd73ba3f';
  baseUrl = 'https://newsapi.org/v2'

  //el constructor requiere conectividad
  constructor(private http: HttpClient) { }

  getSources(){
    return this.http.get(`${this.baseUrl}/top-headlines/sources?apiKey=${this.apiKey}`);
  }

  getArticleBySourceId(sourceId: string){
    return this.http.get(`${this.baseUrl}/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`)
  }

  initArticles(){
    return this.getArticleBySourceId('bbc-news')
  }
}
