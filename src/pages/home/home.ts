import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { OverviewPage } from '../overview/overview';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: String;
  password: String;

  constructor(public navCtrl: NavController, private httpService: HttpServiceProvider) {
   
  }

  onLogin(){
    this.httpService.getLogin(this.email, this.password).subscribe(response => {
      console.log(response.token);
      localStorage.setItem("token", response.token);
      this.navCtrl.push(OverviewPage);
    }, err => {
      console.log(err);
    }); 
  }

  onSignIn(){
    this.navCtrl.push(SigninPage);
  }

}
