import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAdvertPage } from './new-advert';

@NgModule({
  declarations: [
    NewAdvertPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAdvertPage),
  ],
})
export class NewAdvertPageModule {}
