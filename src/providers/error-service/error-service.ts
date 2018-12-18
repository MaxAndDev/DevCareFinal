import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertServiceProvider } from '../alert-service/alert-service';


@Injectable()
export class ErrorServiceProvider {

  constructor(public http: HttpClient, private alertCntrl: AlertServiceProvider) { }

  handleError(error, module) {
    switch (error.status) {
      case 401:
        console.log(error);
          this.alertCntrl.createAlertHandler()
        break;
      case 409:
      console.log(error);
        console.log(error.status);
        this.alertCntrl.createAlert("SigninErr");        
        break;
      case 500:
      console.log(error);
        console.log(error.status);
        this.alertCntrl.createAlert("SigninErr");                
        break;
    }
  }

}
