import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceProvider } from '../http-service/http-service';
import { ErrorServiceProvider } from '../error-service/error-service';
import { GeneralStringsProvider } from '../general-strings/general-strings';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DeviceStorageProvider {

  constructor(public http: HttpClient, private httpService: HttpServiceProvider, private errorHandler: ErrorServiceProvider, private generalStrings: GeneralStringsProvider) { }

  getDevices() {
     this.httpService.getDevices().subscribe(result => {
        console.log(result);
     }, err => {
       this.errorHandler.handleError(err, this.generalStrings.module_Overview);
     })
  }
  
  

  
}


