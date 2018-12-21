import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { AlertStringsProvider } from '../alert-strings/alert-strings';


@Injectable()
export class AlertServiceProvider {

  constructor(public http: HttpClient, private alertCtrl: AlertController, private alertStrings: AlertStringsProvider) { }


  creatAlert(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

  createAlertHandler(modul, status) {
    console.log("AlertHandler", modul, status);
    switch (modul && status) {
      case ("Signin" && "Success"):
        this.creatAlert(this.alertStrings.title_SignIn, this.alertStrings.text_SignIn_suc);
        break;
      case ("Signin" && "Err"):
        this.creatAlert(this.alertStrings.title_SignIn, this.alertStrings.text_SignIn_err);
        break;
      case ("Overview" && "Err"):
        this.creatAlert(this.alertStrings.title_Overview, this.alertStrings.text_Overview_err);
        break;
      case ("Details" && "Err"):
        this.creatAlert(this.alertStrings.title_Details, this.alertStrings.text_Details_err);
        break;
      case ("Scanner" && "Err"):
        this.creatAlert(this.alertStrings.title_Scanner, this.alertStrings.text_Scanner_err);
        break;
      case ("Add" && "Success"):
        console.log("2");
        this.creatAlert(this.alertStrings.title_add, this.alertStrings.text_addDevice_suc);
        break;
      case ("Add" && "Err"):
        this.creatAlert(this.alertStrings.title_add, this.alertStrings.text_addDevice_err);
        break;
      case ("Delete" && "Suc"):
        this.creatAlert(this.alertStrings.title_delete, this.alertStrings.text_deleteDevice_suc);
        break;
      case ("Delete" && "Err"):
        this.creatAlert(this.alertStrings.title_delete, this.alertStrings.text_deleteDevice_err);
        break;
      case ("GetDevice" && "Err"):
        this.creatAlert(this.alertStrings.title_GetDev, this.alertStrings.text_GetDev_err);
        break;
      case ("GiveDevice" && "Err"):
        this.creatAlert(this.alertStrings.title_GiveDev, this.alertStrings.text_GiveDev_err);
        break;
      default: break;
    }
  }

}
