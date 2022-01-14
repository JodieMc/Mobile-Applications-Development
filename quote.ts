import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class QuoteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuoteProvider Provider');
	}
	getQuoteData(): Observable<any> {
		return this.http.get("https://zenquotes.io/api/quotes/[your_key]);
	}

}