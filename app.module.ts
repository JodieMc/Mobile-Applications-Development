import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { CityProvider } from '../providers/city/city';
import { WeatherProvider } from '../providers/weather/weather';
import { NewsProvider } from '../providers/news/news';
import { QuoteProvider } from '../providers/quote/quote';
//Module class describes how app parts fit together
@NgModule({
  declarations: [//Declarations: declare all components
    MyApp,
    HomePage,
	SettingsPage
  ],
  imports: [//Imports: the angular classes used in the app
    BrowserModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot(),
	HttpClientModule,//For web access
	FormsModule
  ],
  bootstrap: [IonicApp],//Start when the app is launched
  entryComponents: [
    MyApp,
    HomePage,
	SettingsPage
  ],
  providers: [//Providers: services used in the app
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CityProvider,
    WeatherProvider,
    NewsProvider,
    QuoteProvider
  ]
})
export class AppModule {}
