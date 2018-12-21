import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceStorageProvider } from '../../providers/device-storage/device-storage';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { DetailsPage } from '../details/details';
import { AddDevicePage } from '../add-device/add-device';

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  devices = [];
  adminOptions: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServiceProvider) {
    this.adminOptions = localStorage.getItem('admin');
  }

  ionViewWillEnter() {
    this.httpService.getDevices().subscribe(result => {
      console.log(result);
      this.extractDevices(result);
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
