import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertDetailsPage } from './advert-details';

@NgModule({
  declarations: [
    AdvertDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvertDetailsPage),
  ],
})
export class AdvertDetailsPageModule {}
