import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdvertServiceProvider } from "../../providers/advert-service/advert-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string = 'Aukcja';
  text: string = 'Popularna aukcja';
  search: string = '';
  error: string = '';
  constructor(public navCtrl: NavController,
              private advertService: AdvertServiceProvider) {

  }

  doSearch() {
    console.log('It works!');
    const credentials = {
      search: this.search
    };
    this.advertService.searchAdverts(credentials)
      .subscribe(result => {
        if(result === true) {
          this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        } else {
          this.error = 'Email lub hasło jest niepoprawne';
        }
      })
  }
}
