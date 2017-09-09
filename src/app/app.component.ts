import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { LandingPage } from "../pages/landing/landing";
import { AuthServiceProvider } from "../providers/auth-service/auth-service";
import { ExplorePage } from "../pages/explore/explore";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;
  pagesWhenLogged: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public authService: AuthServiceProvider) {
    if(this.authService.checkIsLogged()){
      this.rootPage = HomePage;
    } else {
      if (!localStorage.getItem('settings')) {
        this.rootPage = LandingPage;
      }
    }
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'LandingPage', component: LandingPage }
    ];

    this.pagesWhenLogged = [
      { title: 'Home', component: HomePage },
      { title: 'ExplorePage', component: ExplorePage },
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(this.authService.checkIsLogged()) {
      this.nav.setRoot(page.component);
    } else {
      this.nav.setRoot(LoginPage);
    }
  }
  logout() {
    this.authService.logout();
    this.nav.setRoot(LoginPage, {}, { animate: true });
    }
}
