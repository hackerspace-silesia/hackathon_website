import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvertsServiceProvider } from "../../providers/adverts-service/adverts-service";
import { HomePage } from "../home/home";
import { AddPhotoPage } from "../add-photo/add-photo";
import { DomSanitizer } from "@angular/platform-browser";

/**
 * Generated class for the NewAdvertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-advert',
  templateUrl: 'new-advert.html',
})
export class NewAdvertPage {
  subject: string = '';
  topic: string = '';
  city: string = '';
  province: string = '';
  value_from: number = null;
  value_to: number = null;
  body: string = '';
  error: string = '';
  avatar: File = null;
  img: any;
  imgUrl: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public advertsService: AdvertsServiceProvider,
    public domSanitizer: DomSanitizer) {
  }
  
  createAdvert() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const data = {
        topic: this.topic,
        city: this.city,
        value_from: this.value_from,
        value_to: this.value_to,
        user_id: parseInt(currentUser.user_id),
        avatar: this.img
    };
    console.log(data)
    this.advertsService.createAdverts(data).subscribe(
      res => {
        this.navCtrl.setRoot(HomePage, {}, { animate: true, direction: 'forward' });
      }, err => {
        console.log(err);
      }
    );
  }

  popCallback = (_param) => {
    return Promise.resolve(_param)
    .then(url => {
      this.imgUrl = _param;
      let file = this.dataURLtoFile(_param, 'test');
      this.img = file;
    });
  }

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }

  addPhoto() {
    this.navCtrl.push(AddPhotoPage, {popCallback: this.popCallback}, {animate: true, direction: 'forward'});
  }

}
