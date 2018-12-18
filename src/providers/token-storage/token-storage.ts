import { Injectable } from '@angular/core';
import { HttpServiceProvider } from '../http-service/http-service';

@Injectable()
export class TokenStorageProvider {



  constructor(private httpService: HttpServiceProvider) { }

  getToken(email, password, cb) {
    return this.httpService.getLogin(email, password).subscribe(response => {
      console.log(response.token);
      localStorage.setItem("token", response.token);
      return cb;
    }, err => {
      console.log(err);
    })

  }

}
