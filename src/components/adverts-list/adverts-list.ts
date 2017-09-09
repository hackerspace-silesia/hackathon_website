import { Component, OnInit } from '@angular/core';
import { Advert } from '../../models/Advert';
import { AdvertsServiceProvider } from "../../providers/adverts-service/adverts-service";

/**
 * Generated class for the AdvertsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'adverts-list',
  templateUrl: 'adverts-list.html'
})
export class AdvertsListComponent implements OnInit{

  adverts: Advert[];
  error: any;
  constructor(private advertsService: AdvertsServiceProvider) {

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
