import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDevicePage');
  }

  selectRadioButton(value){
    this.accessories.push(value);
    console.log(this.accessories);
  }

  addDevice(model, producer, owner, accessories){
    
  }


}
