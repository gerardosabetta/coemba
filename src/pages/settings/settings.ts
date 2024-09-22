import { CountryListProvider } from '../../providers/country-list/country-list';
import { FirebaseServiceProvider } from './../../providers/firebase-service/firebase-service';
import { SettingsCommunicationService } from './settings.communication.service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  admin: boolean = false;
  newCountry:string = '';
  searchTerm:string = '';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public settings: SettingsCommunicationService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private firebaseService: FirebaseServiceProvider,
    public list: CountryListProvider
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  changeRoom(room) {
    this.settings.setRoom(room)
  }

  toggleAdmin() {
    this.admin = !this.admin;
    this.admin ? this.adminToast() : ''
  }

  adminToast() {
    let toast = this.toastCtrl.create({
      message: 'Que onda perro, no hagas cagadas',
      duration: 3000
    });
    toast.present();
  }

  adminAcess() {
    if (this.admin) {
      this.admin = false;
    } else {
      let prompt = this.alertCtrl.create({
        title: 'Verificación',
        message: "Ingresa tu contraseña de administrador",
        inputs: [
          {
            type: 'password',
            name: 'password',
            placeholder: 'Contraseña'
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ok',
            handler: data => {
              data.password == "anismanlomataron" ? this.toggleAdmin() : console.log('Contraseña incorrecta')
            }
          }
        ]
      });
      prompt.present();
    }
  }

  addCountry() {
    if(this.newCountry.length < 3) {
      this.throwError()
    } else {
      this.firebaseService.addCountry({
        name: this.newCountry,
        location: 'ttii',
        moving: false,
        goingTo: null,
      })
      this.newCountry = ''
    }
  }

  throwError() {
    let alert = this.alertCtrl.create({
      title: 'Entrada no válida',
      subTitle: 'Ingresaste algo invalido o duplicado',
      buttons: ['Ok']
    });
    alert.present();
  }

  deleteConfirm(country) {
    let confirm = this.alertCtrl.create({
      title: '¿Realmente queres borrar este país?',
      message: 'Solo deberias borrar paises con autorización del área técnica',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log(`Eliminiacion de ${country.name} cancelada`);
          }
        },
        {
          text: 'Borrar',
          handler: () => {
            this.firebaseService.removeCountry(country)
          }
        }
      ]
    });
    confirm.present();
  }

  // toDefaultRoomConfirm() {
  //   let confirm = this.alertCtrl.create({
  //     title: '¿Todos a TTII?',
  //     message: '¿Estas seguro?',
  //     buttons: [
  //       {
  //         text: 'Cancelar',
  //         handler: () => {
  //           console.log(`Todos a TTII cancelado`);
  //         }
  //       },
  //       {
  //         text: 'Si',
  //         handler: () => {
  //           this.firebaseService.toDefaultRoom()
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present();
  // }

}
