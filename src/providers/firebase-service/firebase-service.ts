import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import * as firebase from 'firebase'

@Injectable()
export class FirebaseServiceProvider {
  countries = this.afd.list('/embajadores/');
  
  constructor(public afd:AngularFireDatabase) { }

    
  
  getCountries() {
    console.log('Request tiggered');
    return this.afd.list('/embajadores/', {
      query: {
        orderByChild: 'name'
      }
    });
  }


  addCountry(country:any) {
    country.time = firebase.database.ServerValue.TIMESTAMP ;
    return this.countries.push(country);
  }

  removeCountry(id) {
    console.log(id);
    return this.countries.remove(id)
  }

  bathroom(country) {
    return this.countries.update(country, {
      moving:true,
      goingTo:country.location,
      location: 'bathroom',
      time: firebase.database.ServerValue.TIMESTAMP
    })
  }

  moveCountry(id, location) {
     return this.countries.update(id, {
       moving:true,
       goingTo:location,
       time: firebase.database.ServerValue.TIMESTAMP
      })
  }

  confirmEntrance(id) {
    return this.countries.update(id, {
      moving:false,
      location: id.goingTo,
      goingTo:null,
      time: firebase.database.ServerValue.TIMESTAMP
     })
  }
}
