import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdvertDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advert-details',
  templateUrl: 'advert-details.html',
})
export class AdvertDetailsPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  advert: object = {};
  url: string = 'http://155.158.2.29:4000/uploads/';
  imgUrl;

  ionViewDidLoad() {
    this.advert = this.navParams.data.advert;
    console.log(this.navParams.data);
    const avatar = this.navParams.get('advert').avatar;
      this.imgUrl = avatar? `${this.url}${avatar.file_name}` : '';
  }
}
