import { Injectable } from '@angular/core';


@Injectable()
export class AlertStringsProvider {

  constructor() { }

  text_SignIn_Err: String = 'Email already exists!'
  text_SignIn_Suc: String = 'SignIn was successful!'

  title_Overview: String = 'Overview'
  text_Overview_err: String = 'Something went wrong!'

  title_Details: String = 'Device Details'
  text_Details_err: String = 'Somthing went wrong!'

  title_Scanner: String = 'Scanner'
  text_Scanner_err: String = 'Something went wrong!'

  title_GiveDev: String = 'Give Device'
  text_GiveDev_err: String = 'Something went wrong!'

  title_GetDev: String = 'Get Device'
  text_GetDev_err: String = 'Something went wrong!'

}
