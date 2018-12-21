import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertServiceProvider } from '../alert-service/alert-service';
import { GeneralStringsProvider } from '../general-strings/general-strings';


@Injectable()
export class ErrorServiceProvider {

  constructor(public http: HttpClient, private alertCntrl: AlertServiceProvider, private generalStrings: GeneralStringsProvider) { }

  handleError(error, modul) {
    switch (error.status) {
      case 0: //no connection
        this.alertCntrl.createAlertHandler(this.generalStrings.module_Connection, this.generalStrings.StautsError);
        break;
      case 401: //auth failed login
        console.log(error);
        this.alertCntrl.createAlertHandler(this.generalStrings.module_Login, this.generalStrings.StautsError);
        break;
      case 404: // get Device nothing found for id
        console.log(error);
        this.alertCntrl.creatAlert(this.generalStrings.module_Overview, this.generalStrings.StautsError);
        break;
      case 409: // mail already exists sign in
        console.log(error);
        this.alertCntrl.createAlertHandler(this.generalStrings.module_SignIn, this.generalStrings.StautsError);
        break;
      default: //500
        console.log(error);
        this.alertCntrl.createAlertHandler(this.generalStrings.module_Server, this.generalStrings.StautsError);
        break;
    }
  }

}
