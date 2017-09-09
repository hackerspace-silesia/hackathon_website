import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Advert } from "../../models/Advert";

/*
  Generated class for the AdvertsServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdvertsServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AdvertsServiceProvider Provider');
  }

  getAllAdverts() {
    console.log('Leci');
    const token = JSON.parse(localStorage.getItem('currentUser')).token;
    let headers = new Headers();
    headers.append('Authorization',`Bearer ${token}`);
    const options = new RequestOptions({ headers });
    return Observable.create((observer: Observer<Advert[]>) => {
      this.http
        .get('http://155.158.2.29:4000/api/awards', options)
        .map(res => res.json().data)
        .subscribe(
          data => {
            if (data) {
              console.log(data);
              observer.next(data);
              observer.complete();
            } else {
              observer.error(false);
              observer.complete();
            }
          },
          err => {
            console.log(err);
            observer.error(err);
            observer.complete();
          }
        );
    });
  }

  getAdvert(id: number){
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id.toString());
    const token = JSON.parse(localStorage.getItem('currentUser')).token;
    let headers = new Headers();
    headers.append('Authorization',`Bearer ${token}`);
    return Observable.create((observer: Observer<Advert[]>) => {
      this.http
        .get('http://155.158.2.29:4000/api/awards', {
          search: params
        })
        .map(res => res.json().data)
        .subscribe(
          data => {
            if (data) {
              observer.next(data);
              observer.complete();
            } else {
              observer.error(false);
              observer.complete();
            }
          },
          err => {
            observer.error(err);
            observer.complete();
          }
        );
    });
  }

}
