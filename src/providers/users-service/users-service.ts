import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {HttpClientProvider} from "../http-client/http-client";

/*
  Generated class for the UsersServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersServiceProvider {

  constructor(public http: HttpClientProvider) {}
  getUser(): any {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')).user_id;
    return Observable.create((observer: Observer<Response>) => {
      this.http.get(`http://155.158.2.29:4000/api/users/${currentUser}`).subscribe(
        res => {
          observer.next(res);
          observer.complete();
        },
        err => {
          observer.next(err);
          observer.complete();
        }
      )
    });
  }
  editUser(data): any {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')).user_id;
    return Observable.create((observer: Observer<Response>) => {
      this.http.put(`http://155.158.2.29:4000/api/users/${currentUser}`, {
        user: data,
      }).subscribe(
        res => {
          observer.next(res);
          observer.complete();
        },
        err => {
          observer.next(err);
          observer.complete();
        }
      )
    });
  }

}
