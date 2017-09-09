import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdvertsServiceProvider } from "../../providers/adverts-service/adverts-service";
import { Advert } from "../../models/Advert";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  constructor(public navCtrl: NavController, public advertsService: AdvertsServiceProvider) {

  }
  search: string = '';
  error: string = '';
  adverts: Advert[];

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
