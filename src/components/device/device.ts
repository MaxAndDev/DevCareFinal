import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'device',
  templateUrl: 'device.html'
})
export class DeviceComponent {

  @Input('model') model: String;
  @Input('producer') producer: String;
  @Input('status') status: String;
  

  text: String;

  constructor() {
    this.text= "test";

  }

}
