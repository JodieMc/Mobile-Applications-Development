import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CityProvider {

  constructor(public http: HttpClient) {}
  
  getCity(): Observable<any> {
    return this.http.get("https://restcountries.com/v3.1/capital/");
  }

}