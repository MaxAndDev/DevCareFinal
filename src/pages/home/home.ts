import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TokenStorageProvider } from '../../providers/token-storage/token-storage';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: String;
  password: String;

  constructor(public navCtrl: NavController, private tokenStorage: TokenStorageProvider) {

  }

  onLogin(){
    this.tokenStorage.getToken(this.email, this.password);
    if (localStorage.)
  }

  onSignIn(){
    this.navCtrl.push(SigninPage);
  }

}
