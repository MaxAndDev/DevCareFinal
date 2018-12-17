import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServiceProvider, private alert: AlertServiceProvider) { }

  ionViewDidLoad() {

  }

  selectedRadioBtn(value){
    console.log(value);
    return value;
  }


  onRegister(){
    console.log("Registration called", this.email, this.password, this.company, this.name);
    this.httpService.setSignIn(this.email, this.password, this.company, this.name).subscribe(data =>{
      console.log(data);
      this.alert.createAlertSignIn();
    }, err => {
      console.log(err);
    })
  }

}
