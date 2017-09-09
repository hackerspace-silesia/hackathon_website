import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

/*
  Generated class for the HttpClientProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpClientProvider {
  headers = new Headers();

  constructor(public http: Http) {}

  private createOptions(ID?) {
    const token = JSON.parse(localStorage.getItem('currentUser')).token;
    this.headers.append('Authorization', `Bearer ${token}`);
    this.headers.append('Content-Type', 'application/json')
    let options;
    if(ID) {
      let params: URLSearchParams = new URLSearchParams();
      params.set('id', ID);
      options = new RequestOptions({ headers: this.headers, search: params });
      return options
    } else {
      options = new RequestOptions({ headers: this.headers });
      return options;
    }
  }

  private responseSuccess(observer: Observer<any>, response: Response) {
    observer.next(response.json());
    observer.complete();
  }

  private responseFailed(observer: Observer<any>, response: Response) {
    observer.error(response);
    observer.complete();
  }

  get(url, getID?) {
    return Observable.create((observer: Observer<Response>) => {
      this.http.get(url, this.createOptions(getID)).subscribe
      ((response) => {
        this.responseSuccess(observer, response)
      }, (error) => {
        this.responseFailed(observer, error);
      });
    });
  }

  post(url, data) {
    return Observable.create((observer: Observer<Response>) => {
      this.http.post(url, data, this.createOptions()).subscribe
      ((response) => {
        this.responseSuccess(observer, response)
      }, (error) => {
        this.responseFailed(observer, error);
      });
    });
  }

  put(url, data) {
    return Observable.create((observer: Observer<Response>) => {
      this.http.put(url, data).subscribe
      ((response) => {
        this.responseSuccess(observer, response)
      }, (error) => {
        this.responseFailed(observer, error);
      });
    });
  }

  patch(url, data) {
    return Observable.create((observer: Observer<Response>) => {
      this.http.patch(url, data).subscribe
      ((response) => {
        this.responseSuccess(observer, response)
      }, (error) => {
        this.responseFailed(observer, error);
      });
    });
  }

  delete(url, deleteID) {
    return Observable.create((observer: Observer<Response>) => {
      this.http.delete(url, this.createOptions(deleteID)).subscribe
      ((response) => {
        this.responseSuccess(observer, response)
      }, (error) => {
        this.responseFailed(observer, error);
      });
    });
  }

}
