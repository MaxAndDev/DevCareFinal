import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceStorageProvider } from '../../providers/device-storage/device-storage';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { DetailsPage } from '../details/details';
import { AddDevicePage } from '../add-device/add-device';
import { ErrorServiceProvider } from '../../providers/error-service/error-service';
import { GeneralStringsProvider } from '../../providers/general-strings/general-strings';

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  devices = [];
  adminOptions: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServiceProvider, private errorHandler: ErrorServiceProvider, private generalStrings: GeneralStringsProvider) {
    this.adminOptions = localStorage.getItem('admin');
  }

  ionViewWillEnter() {
    this.httpService.getDevices().subscribe(result => {
      console.log(result);
      this.extractDevices(result);
    }, err => {
      this.errorHandler.handleError(err, this.generalStrings.module_Overview);
    })
  }

  extractDevices(devices) {
    this.devices = devices.devices;
  }

  showDetail(id) {
    console.log(id);
    this.navCtrl.push(DetailsPage, {
      data: id
    });
  }

  onAdd() {
    this.navCtrl.push(AddDevicePage);
  }

}
