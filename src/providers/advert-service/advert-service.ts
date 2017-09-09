import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'

/*
  Generated class for the AuthServiceProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdvertServiceProvider {


  constructor(public http: Http) {

  }

  public createOptions() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return new RequestOptions({ headers });
  }

  public searchAdverts(credentials: any): Observable<boolean> {
    let options = this.createOptions();
    return this.http.post('http://155.158.2.29:4000/api/something', JSON.stringify(credentials), options)
      .map((response: Response) => {
        return true;
      });
  }
}
