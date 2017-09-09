import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraTestPage } from './camera-test';

@NgModule({
  declarations: [
    CameraTestPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraTestPage),
  ],
})
export class CameraTestPageModule {}
