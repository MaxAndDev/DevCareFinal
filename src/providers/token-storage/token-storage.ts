import { Injectable } from '@angular/core';
import { HttpServiceProvider } from '../http-service/http-service';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { OverviewPage } from '../../pages/overview/overview';

@Injectable()
export class TokenStorageProvider {

  

  constructor( private httpService: HttpServiceProvider, private navCtrl: NavController) { }

  getToken(email, password){
    return this.httpService.getLogin(email, password).subscribe(response =>{
      console.log(response.token);
      localStorage.setItem("token", response.token);
      this.navCtrl.push(OverviewPage)
    }, err => {
      console.log(err);
    })

  }

}
