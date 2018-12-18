import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AlertStringsProvider } from '../alert-strings/alert-strings';


@Injectable()
export class AlertServiceProvider {

  constructor(public http: HttpClient, private alertCtrl: AlertController, private strings: AlertStringsProvider) { }


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
        this.creatAlert(this.strings.title_SignIn, this.strings.text_SignIn_suc);
        break;
      case "Signin" && "Err":
        this.creatAlert(this.strings.title_SignIn, this.strings.text_SignIn_err);
        break;
      case "Overview" && "Err":
        this.creatAlert(this.strings.title_Overview, this.strings.text_Overview_err);
        break;
      case "Details" && "Err":
        this.creatAlert(this.strings.title_Details, this.strings.text_Details_err);
        break;
      case "Scanner" && "Err":
        this.creatAlert(this.strings.title_Scanner, this.strings.text_Scanner_err);
        break;
      case "GetDevice" && "Err":
        this.creatAlert(this.strings.title_GetDev, this.strings.text_GetDev_err);
        break;
      case "GiveDevice" && "Err":
        this.creatAlert(this.strings.title_GiveDev, this.strings.text_GiveDev_err);
        break;
    }
  }

}
