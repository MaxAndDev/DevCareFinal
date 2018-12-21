import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { OverviewPage } from '../overview/overview';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AddDevicePage } from '../add-device/add-device';
import { ErrorServiceProvider } from '../../providers/error-service/error-service';
import { GeneralStringsProvider } from '../../providers/general-strings/general-strings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: String;
  password: String;

  constructor(public navCtrl: NavController, private httpService: HttpServiceProvider, private errorHandler: ErrorServiceProvider, private generalStrings: GeneralStringsProvider) {

  }

  onLogin() {
    this.httpService.getLogin(this.email, this.password).subscribe(response => {
      console.log(response.token);
      console.log(response.admin);
      localStorage.setItem("token", response.token);
      localStorage.setItem("admin", response.admin);
      this.navCtrl.push(OverviewPage);
    }, err => {
      this.errorHandler.handleError(err, this.generalStrings.module_Login);
    });
  }

  onSignIn() {
    this.navCtrl.push(SigninPage);
  }

  onAdd() {
    this.navCtrl.push(AddDevicePage)
  }

}
