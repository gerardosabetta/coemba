import { SettingsPage } from './../settings/settings';
import { SearchPage } from './../search/search';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public homePage = HomePage;
  public searchPage = SearchPage;
  public settingsPage = SettingsPage

  constructor() {

  }
}
