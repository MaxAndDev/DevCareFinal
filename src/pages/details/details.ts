import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ErrorServiceProvider } from '../../providers/error-service/error-service';
import { GeneralStringsProvider } from '../../providers/general-strings/general-strings';
import { AlertServiceProvider } from '../../providers/alert-service/alert-service';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  id: String;
  model: String;
  producer: String;
  owner: String;
  accessories: String[];
  headphones: String;
  cable: String;
  adapter: String;
  none: String;

  admin_options:String;


  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServiceProvider, private errorHandler: ErrorServiceProvider, private generalStrings: GeneralStringsProvider, private alertCtrl: AlertServiceProvider) {
    this.id = this.navParams.get('data');
    console.log(this.id);
    this.admin_options = localStorage.getItem('admin');
  }

  ionViewDidLoad() {
    this.httpService.getDevice(this.id).subscribe(response =>{
      this.extractDetails(response);
    }, err => {
      this.errorHandler.handleError(err, this.generalStrings.module_Details);
    })
  }

  extractDetails(device){
    this.model = device.model;
    this.producer = device.producer;
    this.owner = device.owner;
    this.accessories = device.accessories;
    if(this.accessories.length != 0){
      this.headphones = this.accessories[0];
      this.cable = this.accessories[1];
      this.adapter = this.accessories[2];
    }
    console.log(this.model, this.producer, this.owner, this.accessories);
    console.log(this.headphones, this.cable, this.adapter);
  }

  removeDev(){
    this.httpService.deleteDevice(this.id).subscribe(response => {
      console.log(response);
      this.alertCtrl.createAlertHandler(this.generalStrings.module_deleteDev, this.generalStrings.StatusSuccess);
    }, err =>{
      this.errorHandler.handleError(err, this.generalStrings.module_deleteDev);
    })
  }

}
