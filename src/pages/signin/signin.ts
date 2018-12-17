import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  email: String;
  password: String;
  company: String;
  name: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {

  }

  onRegister(){
    console.log("Registration called", this.email, this.password, this.company, this.name);
  }

}
