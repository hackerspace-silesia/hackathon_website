import {Component, Input} from '@angular/core';
import { Advert } from '../../models/Advert';

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

  constructor() {

  }

}
