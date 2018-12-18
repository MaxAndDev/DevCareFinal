import { Injectable } from '@angular/core';
import { HttpServiceProvider } from '../http-service/http-service';
import { OverviewPage } from '../../pages/overview/overview';

@Injectable()
export class TokenStorageProvider {

  

  constructor( private httpService: HttpServiceProvider) { }

  getToken(email, password){
    return this.httpService.getLogin(email, password).subscribe(response =>{
      console.log(response.token);
      localStorage.setItem("token", response.token);
    }, err => {
      console.log(err);
    })

  }

}
