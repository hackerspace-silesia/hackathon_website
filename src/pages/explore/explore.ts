import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvertsServiceProvider } from "../../providers/adverts-service/adverts-service";
import { Advert } from "../../models/Advert";

/**
 * Generated class for the ExplorePage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage implements OnInit{
  adverts: Advert[];
  error: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private advertsService: AdvertsServiceProvider) {}
  ngOnInit() {
    this.advertsService.getAllAdverts().subscribe(
      res => {
        this.adverts = JSON.parse(res._body).data;
      },
      err => {
        this.error = err;
      }
    );
  }

}
