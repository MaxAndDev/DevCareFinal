import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ErrorServiceProvider } from '../../providers/error-service/error-service';
import { GeneralStringsProvider } from '../../providers/general-strings/general-strings';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';

@IonicPage()
@Component({
  selector: 'page-add-device',
  templateUrl: 'add-device.html',
})
export class AddDevicePage {

  model: String;
  producer: String;
  owner: String;
  accessories: String[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServiceProvider, private errorHandler: ErrorServiceProvider, private gerneralStrings: GeneralStringsProvider, private alertHandler: AlertServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDevicePage');
  }

  selectRadioButton(value){
    this.accessories.push(value);
    console.log(this.accessories);
  }

  addDevice(){
    this.httpService.postDevice(this.model, this.producer, this.owner, this.accessories).subscribe(response => {
      console.log(response);
      this.alertHandler.createAlertHandler(this.gerneralStrings.module_addDev, this.gerneralStrings.StatusSuccess);
    }, err => {
      this.errorHandler.handleError(err, this.gerneralStrings.module_addDev);
    })
  }


}
