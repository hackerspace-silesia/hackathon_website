import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvertDetailsPage } from './advert-details';
import { CommentsListComponent } from "../../components/comments-list/comments-list";

@NgModule({
  declarations: [
    AdvertDetailsPage,
    CommentsListComponent
  ],
  imports: [
    IonicPageModule.forChild(AdvertDetailsPage),
  ],
})
export class AdvertDetailsPageModule {}
