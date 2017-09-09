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

  adverts: Advert[] = [
    {id: 11, subject: 'Lodówka', topic: 'Sprzedam lodówkę'},
    {id: 12, subject: 'Pralka', topic: 'Sprzedam pralkę'},
    {id: 13, subject: 'Kilo płodu', topic: 'Kupię kilo płodu'},
  ];

  constructor(private advertsService: AdvertsServiceProvider) {

  }
  ngOnInit() {
    this.advertsService.getAllAdverts().subscribe(
      res => {
        const adwerts = JSON.parse(res._body).data;
      }
    );
  }
}
