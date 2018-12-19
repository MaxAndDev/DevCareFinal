import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';


@Component({
  selector: 'device',
  templateUrl: 'device.html'
})
export class DeviceComponent {

  
  text: String;

  constructor() {
    this.text= "test";

  }

}
