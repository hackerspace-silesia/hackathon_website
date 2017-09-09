import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { HomePage } from "../home/home";
import { AlertController } from "ionic-angular";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  password: string = '';
  error: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthServiceProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doRegister(){
    const credentials = {
      user: {
        password: this.password,
        name: this.firstName,
        lastName: this.lastName,
        email: this.email
      }
    };
    this.authService.register(credentials)
      .subscribe(result => {
        if(result === true) {
          this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        } else {
          this.error = 'Email lub hasło jest niepoprawne';
        }
      })
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Rejestracja pomyślna',
      subTitle: 'Twoje konto zostało utworzone. Zostanie aktywowane do 24 godzin.',
      buttons: ['OK']
    });
    alert.present();
  }
}
