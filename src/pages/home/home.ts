import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdvertsServiceProvider } from "../../providers/adverts-service/adverts-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public advertsService: AdvertsServiceProvider) {

  }

  test() {
    this.advertsService.getAllAdverts();
  }
}
