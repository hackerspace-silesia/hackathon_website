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
  title: string = 'Aukcja';
  text: string = 'Popularna aukcja';
  search: string = '';
  error: string = '';
  doSearch() {
    console.log('It works!');
    const credentials = {
      search: this.search
    };
    this.advertsService.searchAdverts(credentials)
      .subscribe(result => {
        if(result === true) {
          this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        } else {
          this.error = 'Email lub hasło jest niepoprawne';
        }
      })
  }
}
