import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	
	myCity: string; //Variables to store information
	newCity: string;
	myUnit: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController, public http: HttpClient) {
  }
  
  ionViewWillEnter() { //For persistant storage
	  this.storage.get("newCity") //Get the value stored in variable newCity
		.then((val) => {
			this.newCity = val;
		})
		.catch((err) => {
			alert ("Error accessing Storage")
		})
  }
  
  ngOnInit() { 
	  this.storage.get("myUnit") 
		.then((data) => {
			this.myUnit = data;
		})
		.catch((err) => {
			alert ("Error accessing Unit")
		})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');

  }
  saveCity(){
		this.myCity = this.newCity;
		this.storage.set("newCity", this.newCity);//Store in local storage
	  }
  
  saveUnits(){
		this.storage.set("myUnit", this.myUnit);
		this.navCtrl.pop();//Pop off the stack
  }
  noCity(){
	  if(this.newCity == ""){
		 const alert = this.alertCtrl.create({
      title: 'localhost:8100 says',
      subTitle: 'Please enter a city name, or press back to exit',
      buttons: [{
          text: 'OK',
		  cssClass:'buttons'
          }],
    });
    alert.present();
	this.navCtrl.push(SettingsPage);//Push onto the stack
	console.log("No details");

	}

  }
  
}


