import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdvertsServiceProvider } from "../../providers/adverts-service/adverts-service";
import { NewAdvertPage } from "../new-advert/new-advert";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public advertsService: AdvertsServiceProvider) {

  }
  search: string = '';
  error: string = '';
  newAdvertPage = NewAdvertPage;

  doSearch() {
    console.log('It works!');
    const data = {
      search: this.search
    };
    const response = this.advertsService.searchAdverts(data)
    if (response) {
      this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
    }
  }
}
