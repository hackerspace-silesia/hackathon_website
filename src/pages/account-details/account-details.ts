import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersServiceProvider } from "../../providers/users-service/users-service";
import { User } from "../../models/User";
import {EditUserPage} from "../edit-user/edit-user";
/**
 * Generated class for the AccountDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-details',
  templateUrl: 'account-details.html',
})
export class AccountDetailsPage implements OnInit{
  user: User = {
    email: '',
    name: '',
    lastname: '',
    type: '',
  };
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public userService: UsersServiceProvider) {
  }
  ngOnInit() {
    this.userService.getUser().subscribe(
      res => {
        this.user = JSON.parse(res._body).data;
      },
      err => {
        console.log(err);
      }
    );
  }
  viewEditPage() {
    this.navCtrl.push(EditUserPage, { user: this.user }, {animate: true, direction: 'forward'});
  }

}
