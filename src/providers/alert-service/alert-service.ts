import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Injectable()
export class AlertServiceProvider {

  constructor(public http: HttpClient, private alertCtrl: AlertController) { }


  creatAlert(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  createAlertHandler(modul, status) {
    switch (modul && status) {
      case "Signin" && "Success":
        break;
      case "Signin" && "Err":
        break;
      case "Overview" && "Err":
        break;
      case "Details" && "Err":
        break;
      case "Scanner" && "Err":
        break;
      case "GetDevice" && "Err":
        break;
      case "GiveDevice" && "Err":
        break;
    }
  }

}
