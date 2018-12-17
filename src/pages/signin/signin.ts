import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  email: String;
  password: String;
  company: String;
  name: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpServiceProvider) { }

  ionViewDidLoad() {

  }

  selectedRadioBtn(value){
    console.log(value);
    return value;
  }


  onRegister(){
    console.log("Registration called", this.email, this.password, this.company, this.name);
    this.httpService.setSignIn(this.email, this.password, this.company, this.name).subscribe(data =>{
      console.log(data);
    }, err => {
      console.log(err);
    })
  }

}
