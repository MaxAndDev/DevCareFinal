import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Injectable()
export class AlertServiceProvider {

  constructor(public http: HttpClient, private alertCtrl: AlertController) { }

  //Signin 200
  createAlertSignInPositive() {
    let alert = this.alertCtrl.create({
      title: 'Sign In',
      subTitle: 'Your Sign In was successful',
      buttons: ['OK']
    });
    alert.present();
  }

  //Signin 409
  creatAlertSignInErr() {
    let alert = this.alertCtrl.create({
      title: 'Sign In',
      subTitle: 'Email already exists!',
      buttons: ['OK']
    });
    alert.present();
  }

  createAlert(modul, status) {
    switch (modul && status) {
      case "Signin" && "Success":
        this.createAlertSignInPositive()
        break;
      case "Signin" && "Err":
        this.creatAlertSignInErr();
        break;
    }
  }

}
