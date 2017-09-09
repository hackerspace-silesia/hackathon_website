import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvertsServiceProvider } from "../../providers/adverts-service/adverts-service";
import { HomePage } from "../home/home";

/**
 * Generated class for the NewAdvertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-advert',
  templateUrl: 'new-advert.html',
})
export class NewAdvertPage {
  subject: string = '';
  topic: string = '';
  city: string = '';
  province: string = '';
  value_from: number = null;
  value_to: number = null;
  body: string = '';
  error: string = '';
  avatar: File = null;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public advertsService: AdvertsServiceProvider) {
  }
  createAdvert() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      const data = {
        award: {
          topic: this.topic,
          city: this.city,
          value_from: this.value_from,
          value_to: this.value_to,
          user_id: parseInt(currentUser.user_id)
        }
      };
      console.log(data.award.user_id);
      this.advertsService.createAdverts(data).subscribe(
        res => {
          this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
        }, err => {
          console.log(err);
        }
      );
    }
}
