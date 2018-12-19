import { Component } from '@angular/core';

/**
 * Generated class for the DeviceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'device',
  templateUrl: 'device.html'
})
export class DeviceComponent {

  text: string;

  constructor() {
    console.log('Hello DeviceComponent Component');
    this.text = 'Hello World';
  }

}
