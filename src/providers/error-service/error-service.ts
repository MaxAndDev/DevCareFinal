import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ErrorServiceProvider {

  constructor(public http: HttpClient) {  }

  handleError(error){
    console.log(error);
  }

}
