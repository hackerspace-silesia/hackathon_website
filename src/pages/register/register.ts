import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { HomePage } from "../home/home";
import { AlertController } from "ionic-angular";

/**
 * Generated class for the RegisterPage page.
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
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  nip: number = null;
  registerSuccess: boolean = false;
  error: object;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthServiceProvider,
              public alertCtrl: AlertController) {
  }
  doRegister(){
    const credentials = {
      user: {
        password: this.password,
        name: this.firstName,
        lastName: this.lastName,
        email: this.email,
        nip: this.nip
      }
    };

    if (this.password.length < 8) {
      this.error = {
        type: 'Error',
        message: 'Minimalna długość hasła to 8',
      };
      return
    } else if (this.firstName.length === 0) {
      this.error = {
        type: 'Error',
        message: 'Imię jest wymagane',
      };
      return
    } else if (this.lastName.length === 0) {
      this.error = {
        type: 'Error',
        message: 'Nazwisko jest wymagane',
      };
      return;
    } else if (this.email.length === 0) {
      this.error = {
        type: 'Error',
        message: 'Email jest wymagany',
      };
      return;
    } else {
      this.authService.register(credentials)
        .subscribe(result => {
          this.registerSuccess = true;
          this.password = '';
          this.firstName = '';
          this.lastName = '';
          this.email = '';
          this.nip = null;
        })
    }
  }
}
