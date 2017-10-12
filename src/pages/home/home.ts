import { CountryListProvider } from './../../providers/country-list/country-list';
import { SettingsCommunicationService } from './../settings/settings.communication.service';
import { Component } from '@angular/core';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public settings: SettingsCommunicationService,
    public list: CountryListProvider
  ) { }
}
