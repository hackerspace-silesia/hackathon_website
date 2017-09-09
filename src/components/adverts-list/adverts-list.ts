import {Component, Input, OnInit} from '@angular/core';
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

  @Input() adverts: Advert[];
  error: any;
  constructor(private advertsService: AdvertsServiceProvider) {

  }
  ngOnInit() {

  }

}
