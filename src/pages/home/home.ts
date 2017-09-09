import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdvertsServiceProvider } from "../../providers/adverts-service/adverts-service";
import { NewAdvertPage } from "../new-advert/new-advert";
import { Advert } from "../../models/Advert";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  constructor(public navCtrl: NavController, public advertsService: AdvertsServiceProvider) {}
  search: string = '';
  error: string = '';
  newAdvertPage = NewAdvertPage;
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
        this.adverts = JSON.parse(res._body).data.slice(0, 5);
      },
      err => {
        this.error = err;
      }
    );
  }

}
