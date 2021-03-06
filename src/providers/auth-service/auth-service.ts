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
export class AuthServiceProvider {
  public token: string;

  constructor(public http: Http) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  public createOptions() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return new RequestOptions({ headers });
  }

  public login(credentials: any): Observable<boolean> {
    let options = this.createOptions();
    return this.http.post('http://155.158.2.29:4000/api/login', JSON.stringify(credentials), options)
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          console.log(response);
          localStorage.setItem('currentUser', JSON.stringify({
            username: credentials.login,
            user_id: response.json().user.id,
            token,
          }));
          localStorage.setItem('settings', JSON.stringify( {
            firstLaunch: false,
          }));
          return true;
        } else {
          return false;
        }
      });
  }
  public register(credentials: object): Observable<boolean> {
    console.log(credentials);
    return this.http.post('http://155.158.2.29:4000/api/users', credentials)
      .map((response: Response) => {
        if(response.status === 201) {
          return true;
        }
      });
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  checkIsLogged() {
    return localStorage.getItem('currentUser');
  };

}
