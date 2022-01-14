import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NewsProvider {


  constructor(public http: HttpClient) {
  }
	getNews(): Observable<any> {
    return this.http.get("https://newsapi.org/v2/top-headlines?country&pageSize&apiKey=7e29d3a1f5614c41a29472fe05767a26");
  }

}
