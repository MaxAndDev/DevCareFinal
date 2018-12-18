import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Injectable()
export class AlertServiceProvider {

  constructor(public http: HttpClient, private alertCtrl: AlertController) { }

  createAlertSignInPositive() {
    let alert = this.alertCtrl.create({
      title: 'Sign In',
      subTitle: 'Your Sign In was successful',
      buttons: ['OK']
    });
    alert.present();
  }

  creatAlertSignInErr() {
    let alert = this.alertCtrl.create({
      title: 'Sign In',
      subTitle: 'Your Sign In was successful',
      buttons: ['OK']
    });
    alert.present();
  }

  createAlert(modul) {
    switch (modul) {
      case "Login":
        break;
      case "Signin":
        this.createAlertSignInPositive()
        break;
      case "SigninErr":
        this.creatAlertSignInErr();
        break;
    }
  }

}