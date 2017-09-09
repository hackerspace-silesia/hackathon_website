import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/User";
import {UsersServiceProvider} from "../../providers/users-service/users-service";

/**
 * Generated class for the EditUserPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-user',
  templateUrl: 'edit-user.html',
})
export class EditUserPage implements OnInit{
  user: User = {
    email: '',
    name: '',
    lastname: '',
    type: '',
  };
  message: string;
  error: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private userService: UsersServiceProvider ) {
  }
  ngOnInit() {
    this.user = this.navParams.data.user
  }
  edit() {
    console.log(this.user);
    this.userService.editUser({
      name: this.user.name,
      email: this.user.email,
      lastname: this.user.lastname,
      type: this.user.type,
    }).subscribe(
      res => {
        this.message = 'Edycja przebiegła pomyślnie';
      }, err => {
        this.error = 'Edycja się nie powiodła';
      }
    )
  }
}
