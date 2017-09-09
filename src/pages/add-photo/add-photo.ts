import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the AddPhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var CameraPreview: any;
@IonicPage()
@Component({
  selector: 'page-add-photo',
  templateUrl: 'add-photo.html',
})
export class AddPhotoPage {

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

  callback: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
    this.callback = this.navParams.get('popCallback');
  }

  ionViewDidLoad() {
    if(this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        CameraPreview.startCamera(this.options);
      })
    }
  }

  getPicture() {
    CameraPreview.takePicture({width: 1024, height: 768, quality: 50}, (data) => {
      let img;
      if(data) {
        img = 'data:image/jpeg;base64,' + data[0];
        this.callback(img).then(()=> {
        })
        .catch(e => console.log(e))
        CameraPreview.hide();
        CameraPreview.stopCamera();
        this.navCtrl.pop({animate: true, direction: 'backward'});
      }
    });
  }

  ionViewWillLeave() {
    CameraPreview.hide();
    CameraPreview.stopCamera();
  }

}

