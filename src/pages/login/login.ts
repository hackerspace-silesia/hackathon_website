import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";

/**
 * Generated class for the LoginPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string = '';
  password: string = '';
  error: string;
  registerPage = RegisterPage;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private authService: AuthServiceProvider) {
  }

  doLogin() {
    const credentials = {
      login: this.email,
      password: this.password
    };
    this.authService.login(credentials)
      .subscribe(result => {
        if(result === true) {
          this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        } else {
          this.error = 'Email lub hasło jest niepoprawne';
        }
      })
  }

}
