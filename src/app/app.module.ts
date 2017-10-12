import { PipesModule } from './../pipes/pipes.module';
import { SettingsCommunicationService } from './../pages/settings/settings.communication.service';
import { SettingsPage } from './../pages/settings/settings';
import { ViewCountriesComponent } from './../components/view-countries/view-countries';
import { SearchPage } from './../pages/search/search';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { MomentModule } from 'angular2-moment';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseServiceProvider } from '../providers/firebase-service/firebase-service';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2'
import { CountryListProvider } from '../providers/country-list/country-list';

var firebaseConfig = {
  apiKey: "AIzaSyBRmEK2tcBHwdlXAbe6Zof3ePsAyEsMhB0",
  authDomain: "embajadores-709ca.firebaseapp.com",
  databaseURL: "https://embajadores-709ca.firebaseio.com",
  projectId: "embajadores-709ca",
  storageBucket: "embajadores-709ca.appspot.com",
  messagingSenderId: "609074079857"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    SettingsPage,
    ViewCountriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    MomentModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    PipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    SearchPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider,
    SettingsCommunicationService,
    CountryListProvider
  ]
})
export class AppModule {}
