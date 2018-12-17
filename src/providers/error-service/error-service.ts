import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ErrorServiceProvider {

  constructor(public http: HttpClient) { }

  handleError(error) {
    switch (error.status) {
      case 401:
        console.log(error.status);
        break;
      case 409:
        console.log(error.status);
        break;
      case 500:
        console.log(error.status);
        break;
    }
  }

}
