import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CityProvider } from '../../providers/city/city'; 
import { WeatherProvider } from '../../providers/weather/weather';
import { NewsProvider } from '../../providers/news/news';
import { QuoteProvider } from '../../providers/quote/quote';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
	title = 'G00045193';//Data binding: allows for synchronisation of the model and view components; if the title variable changes the view will also
	buttonDisabled: boolean;
	displayMessage = 'No city selected';
	
	newCity: string;
	myUnit: string;
	country: string;
	validCity: string;
	
	temp: number;
	description: string;
	weatherIcon; string;
	wind: string;
	
	article: string[];
	
	q: any = [];
	

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams, public http: HttpClient, private wp: WeatherProvider, private np: NewsProvider, private cp: CityProvider, private qp: QuoteProvider) { //Dependency injection

  }

  ngOnInit() { //Fired once during component initialisation
	let displayMessage = 'No city selected';
  }
  
   openSettingsPage(){
	this.navCtrl.push(SettingsPage);//Add the SettingsPage onto the stack
}
  
   ionViewWillEnter() { //For persistant storage
	  this.storage.get("newCity") //Get the value stored in variable newCity
		.then((val) => {
			this.newCity = val;
		})
		.catch((error) => {//Catch error if storage cannot be accessed
			alert ("Error accessing Storage")
		})		
  }
  
   getCity() {
	this.cp.getCity().subscribe(data => {
		this.storage = data.newCity;
		this.name = data.common;
		this.flags = data.flags;
	});
	}
	getWeather() {//Function to get the weather information based on user input
    this.wp.getWeather(this.newCity, this.myUnit).subscribe((data) => {
        this.temp = data.temp;
		this.description = data.description;
        this.weatherIcon = data.weather.icon;
		this.wind = data.wind_cdir_full ;
    });
  }
	getNews() { //Function to get news based on country
		this.np.getNews(this.country).subscribe((data) => {
      this.article = data.title;
	  this.article = data.description;
	  this.article = data.url;
	  this.article = data.urlToImage;
    })
	}
	
	getInfo() { //Function to convert JSON data
	   this.storage.get('information')
      .then((data) => {
        if(data != null) {
          let information = JSON.parse(data);//JSON.parse converts a string to a JavaScript object and TypeScript a superset of JavaScript, therefore it can be used here
          this.newCity = settings.newCity;
          this.myUnit = settings.myUnit;
          this.getWeather();
      });
      .catch((error) => {
        alert("Problem accessing storage");
      });
	}
 }
	
	displayMessage() { //Function with information to be displayed if city entered by user not valid
		console.log(`${newCity} not found, try another city in settings`);//Using a template string here i.e. injecting the value of the variable into the string
		changeText() {
			let el = document.getElementById("text1");
		}
		let displayMessage = new displayMessage();
		
		document.getElementById("b1").addEventListener("click", function(){
			displayMessage.changeText;	
		}
	}
	 ionViewWillLoad() { //Function to get JSON data want to display
	this.qp.getQuoteData().subscribe(data => {
		this.q = data.q;
	});
  }
	
	
}
