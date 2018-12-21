import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HttpServiceProvider {

  api_url = "http://localhost:3030/";
  user = "user/"
  device = "device/"
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

  setSignIn(email, password, company, name, admin): Observable<any>{
    return this.http.post(this.api_url + this.user + this.param_signin, {
      "email": email,
      "password": password,
      "company": company,
      "name": name,
      "admin": admin
    });
  }

  getDevices(){
    return this.http.get(this.api_url + this.device );
  }

  getDevice(id){
    return this.http.get(this.api_url + this.device + id);
  }

  postDevice(model, producer, owner, accessories){
    return this.http.post(this.api_url + this.device, {
      "model": model,
      "producer": producer,
      "owner": owner,
      "status": "existing",
      "accessories": accessories
    })
  }

  deleteDevice(id) {
    return this.http.delete(this.api_url+ this.device + id);
  }

}
