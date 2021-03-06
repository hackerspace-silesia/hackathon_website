import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { AccountDetailsPage } from "../pages/account-details/account-details";
import { EditUserPage } from "../pages/edit-user/edit-user";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from "../components/components.module";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from "@angular/http";
import { LandingPage } from "../pages/landing/landing";
import { AdvertsServiceProvider } from '../providers/adverts-service/adverts-service';
import { HttpClientProvider } from '../providers/http-client/http-client';
import { MainPipe } from "../pipes/main-pipe.module";
import { AddPhotoPage } from "../pages/add-photo/add-photo";
import { NewAdvertPage } from "../pages/new-advert/new-advert";
import { AdvertDetailsPage } from "../pages/advert-details/advert-details";
import { MyAdvertsPage } from "../pages/my-adverts/my-adverts";
import { UsersServiceProvider } from '../providers/users-service/users-service';
import { ExplorePage } from "../pages/explore/explore";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegisterPage,
    LandingPage,
    AdvertDetailsPage,
    AddPhotoPage,
    AccountDetailsPage,
    MyAdvertsPage,
    NewAdvertPage,
    EditUserPage,
    ExplorePage
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
    AddPhotoPage,
    AccountDetailsPage,
    MyAdvertsPage,
    NewAdvertPage,
    EditUserPage,
    ExplorePage
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
