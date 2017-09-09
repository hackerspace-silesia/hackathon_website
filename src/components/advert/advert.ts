import { Component } from '@angular/core';
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

  advert: Advert;
  advertExample = {
    Subject: 'Sklep',
    Topic: 'Sprzedam lodówkę',
    authorName: 'Bob',
    authorLastName: 'Bob',
    createdAt: '2017-04-05',
    City: 'Jamajka',
    Province: 'Śląsk',
    Body: 'Sprzedam lodówkę kurwa bo mam horom curke',
    Photos: '',
    valueFrom: 123,
    valueTo: 150,
    State: 'Bardzo dobrze',
    userID: 12,
  };

  constructor() {
    this.advert = new Advert(this.advertExample);
  }

}
