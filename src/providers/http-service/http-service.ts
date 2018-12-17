import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpServiceProvider {

  api_url = "http://localhost:3030/";
  user = "user/"
  param_login = "login";
  param_signin = "signup"


  constructor(private http: HttpClient) {
   
  }

  getLogin(email, password): Observable<any>{
    return this.http.post(this.api_url + this.user + this.param_login, {
      "email": email,
      "password": password
    });
  }

  setSignIn(email, password, company, name): Observable<any>{
    return this.http.post(this.api_url + this.user + this.param_signin, {
      "email": email,
      "password": password,
      "company": company,
      "name": name
    });
  }

}
