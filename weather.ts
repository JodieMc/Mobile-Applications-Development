import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherProvider {

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
  }
  
  getWeather(): Observable<any> {
    return this.http.get("https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=d6187a3b99084616b98cea78c0667e02&include=minutely");
  }

}

