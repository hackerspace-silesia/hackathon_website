import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdvertsServiceProvider } from "../../providers/adverts-service/adverts-service";
import { Comment } from "../../models/Comment";

/**
 * Generated class for the AdvertDetailsPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-advert-details',
  templateUrl: 'advert-details.html',
})
export class AdvertDetailsPage implements OnInit{

  comments: Comment[];
  error: string = '';
  commentMessage: string = '';
  award_id: number = null;
  author: string = '';
  user: number = null;
  advert: object = {};
  imgUrl;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public advertsService: AdvertsServiceProvider) {}

  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(currentUser);
    this.author = currentUser.username;
    this.user = currentUser.user_id;
    const data = this.navParams.get('advert').id;
    this.award_id = data;
    this.advertsService.getAllComments(data).subscribe(
      res => {
        this.comments = JSON.parse(res._body).data;
      },
      err => {
        this.error = err;
      }
    );
  }

  createComment() {
    const data = {
      comment: {
        title: this.commentMessage,
        user_id: this.user,
        author: this.author,
        award_id: this.award_id
      }
    };
    this.advertsService.newComment(data,this.award_id).subscribe(
      res => {
        this.comments.unshift(JSON.parse(res._body).data);
      },
      err => {
        this.error = err;
      }
    )
  }
}
