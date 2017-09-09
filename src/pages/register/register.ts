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
  nip: number = null;
  registerSuccess: boolean = false;

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
        email: this.email,
        nip: this.nip
      }
    };
    this.authService.register(credentials)
      .subscribe(result => {
        if(result === true) {
          this.registerSuccess = true;
          this.password = '';
          this.firstName = '';
          this.lastName = '';
          this.email = '';
          this.nip = null;
        } else {
          this.error = 'Email lub hasło jest niepoprawne';
        }
      })
  }
}
