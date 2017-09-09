import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the CameraTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var CameraPreview: any;

@IonicPage()
@Component({
  selector: 'page-camera-test',
  templateUrl: 'camera-test.html',
})
export class CameraTestPage {

  options: object = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: CameraPreview.CAMERA_DIRECTION.BACK,
    toBack: true,
    tapPhoto: false,
    tapFocus: true,
    previewDrag: false
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  }

  ionViewDidLoad() {

    if (this.platform.ready()) {
      CameraPreview.startCamera(this.options);
    }
  }

  getPicture() {
    CameraPreview.takePicture({width: 1024, height: 768, quality: 50}, (data) => {
      let img;
      if(data) {
        img = 'data:image/jpeg;base64,' + data[0];
      }
    });
  }

}
