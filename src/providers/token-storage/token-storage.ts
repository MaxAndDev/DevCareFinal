import { Injectable } from '@angular/core';
import { HttpServiceProvider } from '../http-service/http-service';
import { ErrorServiceProvider } from '../error-service/error-service';

@Injectable()
export class TokenStorageProvider {

  

  constructor( private httpService: HttpServiceProvider, private errService: ErrorServiceProvider) { }

  getToken(email, password){
    return this.httpService.getLogin(email, password).subscribe(response =>{
      console.log(response.token);
      localStorage.setItem("token", response.token);
    }, err => {
      this.errService.handleError(err);
    })

  }

}
