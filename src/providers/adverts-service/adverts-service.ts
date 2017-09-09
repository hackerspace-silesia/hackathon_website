import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Advert } from "../../models/Advert";
import { HttpClientProvider } from "../http-client/http-client";
import {RequestOptions, Response} from "@angular/http";

/*
  Generated class for the AdvertsServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdvertsServiceProvider {

  constructor(public http: HttpClientProvider) {
    console.log('Hello AdvertsServiceProvider Provider');
  }

  getAllAdverts() {
    this.http.get('http://155.158.2.29:4000/api/awards').subscribe(
      res => {
        console.log(res.data);
        return res.data;
      },
      err => {
        console.log(err);
      }
    )
  }

  getAdvert(id: number){
    this.http.get('http://155.158.2.29:4000/api/awards', id).subscribe(
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

}
