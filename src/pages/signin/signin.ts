import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ErrorServiceProvider } from '../../providers/error-service/error-service';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';
import { GeneralStringsProvider } from '../../providers/general-strings/general-strings';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  mModule: String = "Signin";
  mStatusSuc: String = "Success";
  mStatusErr: String = "Err";

  email: String;
  password: String;
  company: String;
  name: String;
  admin: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServiceProvider, private errHandler: ErrorServiceProvider, private alert: AlertServiceProvider, private generalStrings: GeneralStringsProvider) { }
  ionViewDidLoad() {

  }

  selectedRadioBtn(value) {
    console.log(value);
    this.admin = value;
  }


  onRegister() {
    console.log("Registration called", this.email, this.password, this.company, this.name, this.admin);
    this.httpService.setSignIn(this.email, this.password, this.company, this.name, this.admin).subscribe(data => {
      console.log(data);
      this.alert.createAlertHandler(this.generalStrings.module_SignIn, this.generalStrings.StatusSuccess);
    }, err => {
      this.errHandler.handleError(err, this.generalStrings.module_SignIn);
    })
  }

}
