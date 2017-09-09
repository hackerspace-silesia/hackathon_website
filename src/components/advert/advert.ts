import { Component, Input } from '@angular/core';
import { Advert } from '../../models/Advert';
import { NavController } from "ionic-angular";
import { AdvertDetailsPage } from "../../pages/advert-details/advert-details";

/**
 * Generated class for the AdvertComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'advert',
  templateUrl: 'advert.html',
})
export class AdvertComponent {
  @Input() advert: Advert;

  constructor(private navController: NavController) {}

  viewDetails() {
    this.navController.push(AdvertDetailsPage, { advert: this.advert }, {animate: true, direction: 'forward'});
  }

}
