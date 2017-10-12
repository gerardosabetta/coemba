import { CountryListProvider } from './../../providers/country-list/country-list';
import { SettingsCommunicationService } from './../../pages/settings/settings.communication.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { Component } from '@angular/core';
import { Platform, ActionSheetController, AlertController } from 'ionic-angular';

@Component({
  selector: 'view-countries',
  templateUrl: 'view-countries.html',
})
export class ViewCountriesComponent {

  searchTerm: string = '';

  constructor(
    private actionSheetController: ActionSheetController,
    private alertCtrl: AlertController,
    private platform: Platform,
    private firebaseService: FirebaseServiceProvider,
    private settings: SettingsCommunicationService,
    private list: CountryListProvider
  ) { }
  ngOnChanges() {
    console.log(this.settings.room);
  }

  openMenu(country) {
    let actionSheet = this.actionSheetController.create({
      title: `${country.name} se dirige a`,
      buttons: [
        {
          text: 'Asamblea General',
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
            this.settings.room !== "ag" ? this.firebaseService.moveCountry(country, "ag") : this.errorSelf();
          }
        },
        {
          text: 'Sala de tratados',
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
            this.settings.room !== "ttii" ? this.firebaseService.moveCountry(country, "ttii") : this.errorSelf();
          }
        },
        {
          text: 'Ecosoc',
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
            this.settings.room !== "ecosoc" ? this.firebaseService.moveCountry(country, "ecosoc") : this.errorSelf();
          }
        },
        {
          text: 'Consejo de DDHH',
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
            this.settings.room !== "cdh" ? this.firebaseService.moveCountry(country, "cdh") : this.errorSelf();
          }
        },
        {
          text: 'Consejo de seguridad',
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
            this.settings.room !== "cs" ? this.firebaseService.moveCountry(country, "cs") : this.errorSelf();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? null : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  confirmEntrance(country) {
    this.firebaseService.confirmEntrance(country)
  }

  bathroom(country) {
    this.firebaseService.bathroom(country)
  }

  errorSelf() {
    let alert = this.alertCtrl.create({
      title: '¿Que haces?',
      subTitle: 'No podes mandar un embajador desde tu órgano hacia tu mismo órgano, duh!',
      buttons: ['De una, la cague']
    });
    alert.present();
  }
}
