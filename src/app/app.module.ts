import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { AccountDetailsPage } from "../pages/account-details/account-details";
import { NewAdvertPage } from "../pages/new-advert/new-advert";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from "../components/components.module";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from "@angular/http";
import { LandingPage } from "../pages/landing/landing";
import { AdvertsServiceProvider } from '../providers/adverts-service/adverts-service';
import { HttpClientProvider } from '../providers/http-client/http-client';
import { MainPipe } from "../pipes/main-pipe.module";
import { AdvertDetailsPage } from "../pages/advert-details/advert-details";
import { MyAdvertsPage } from "../pages/my-adverts/my-adverts";
import { UsersServiceProvider } from '../providers/users-service/users-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    LandingPage,
    AdvertDetailsPage,
    AccountDetailsPage,
    MyAdvertsPage,
    NewAdvertPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    HttpModule,
    MainPipe,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    LandingPage,
    AdvertDetailsPage,
    AccountDetailsPage,
    MyAdvertsPage,
    NewAdvertPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    AdvertsServiceProvider,
    HttpClientProvider,
    UsersServiceProvider,
  ]
})
export class AppModule {}
