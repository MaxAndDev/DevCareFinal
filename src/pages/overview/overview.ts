import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceStorageProvider } from '../../providers/device-storage/device-storage';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  devices = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServiceProvider) { }

  ionViewDidLoad() {
    this.httpService.getDevices().subscribe(result => {
      this.extractDevices(result)
    })
    
  }

  extractDevices(devices){
    this.devices = devices.devices;
  }

}
