import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from './../firebase-service/firebase-service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CountryListProvider {

  countryList: FirebaseListObservable<any>
  constructor(
    private firebaseService: FirebaseServiceProvider,          
  ) {
    this.countryList = this.firebaseService.getCountries();
  }

}
