import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Advert } from "../../models/Advert";
import { AdvertsServiceProvider } from "../../providers/adverts-service/adverts-service";


/**
 * Generated class for the MyAdvertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-adverts',
  templateUrl: 'my-adverts.html',
})
export class MyAdvertsPage implements OnInit{
  adverts: Advert[];
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private advertsService: AdvertsServiceProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAdvertsPage');
  }
  ngOnInit() {
    this.advertsService.getUserAdverts().subscribe(
      res => {
        this.adverts = JSON.parse(res._body).data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
