import { CountryListProvider } from './../../providers/country-list/country-list';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchTerm:string = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public list:CountryListProvider
  ) {  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdministrationPage');
  }
}
