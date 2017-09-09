import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClientProvider } from "../http-client/http-client";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

/*
  Generated class for the AdvertsServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdvertsServiceProvider {

  constructor(public http: HttpClientProvider) {

  }

  getAllAdverts(): any {
    return Observable.create((observer: Observer<Response>) => {
      this.http.get('http://155.158.2.29:4000/api/awards').subscribe(
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

  getUserAdverts(): any {
    const options = {
      name: 'user_id',
      value: JSON.parse(localStorage.getItem('currentUser')).user_id,
    };
    return Observable.create((observer: Observer<Response>) => {
      this.http.get(`http://155.158.2.29:4000/api/awards?user_id=${options.value}`).subscribe(
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

  public searchAdverts(data: any) {
    this.http.post('http://155.158.2.29:4000/api/something', JSON.stringify(data)).subscribe(
      res => {
        console.log(res.data);
        return res.data;
      },
      err => {
        console.log(err);
        return err;
      }
    )
  }

  public createAdverts(data: object) {
    return Observable.create((observer: Observer<Response>) => {
      this.http.post('http://155.158.2.29:4000/api/awards', JSON.stringify(data)).subscribe(
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
