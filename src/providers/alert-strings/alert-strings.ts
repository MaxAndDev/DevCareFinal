import { Injectable } from '@angular/core';


@Injectable()
export class AlertStringsProvider {

  constructor() { }

  title_SignIn: String = 'Sign In'
  text_SignIn_err: String = 'E-Mail already exists!'
  text_SignIn_suc: String = 'Sign In was successful!'

  title_Overview: String = 'Overview'
  text_Overview_err: String = 'Something went wrong!'

  title_Details: String = 'Device Details'
  text_Details_err: String = 'Somthing went wrong!'

  title_add: String = 'Add Device'
  text_addDevice_suc: String = 'Device created!'
  text_addDevice_err: String = 'Something went wrong!'

  title_delete: String = 'Remove Device'
  text_deleteDevice_suc: String = 'Removed device successfully!'
  text_deleteDevice_err: String = 'Something went wrong!'

  title_Scanner: String = 'Scanner'
  text_Scanner_err: String = 'Something went wrong!'

  title_GiveDev: String = 'Give Device'
  text_GiveDev_err: String = 'Something went wrong!'

  title_GetDev: String = 'Get Device'
  text_GetDev_err: String = 'Something went wrong!'

  title_Connection: String ='Connection Error'
  text_Connection: String = 'No Wifi connection!'

}
