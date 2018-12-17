import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ErrorServiceProvider } from '../../providers/error-service/error-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServiceProvider, private errHandler: ErrorServiceProvider) { }

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
    }, err => {
      this.errHandler.handleError(err);
    })
  }

}
