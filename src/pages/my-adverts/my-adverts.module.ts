import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyAdvertsPage } from './my-adverts';

@NgModule({
  declarations: [
    MyAdvertsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyAdvertsPage),
  ],
})
export class MyAdvertsPageModule {}
