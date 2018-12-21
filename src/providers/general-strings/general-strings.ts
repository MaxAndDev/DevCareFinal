import { Injectable } from '@angular/core';

@Injectable()
export class GeneralStringsProvider {

  constructor() {  }

  module_SignIn: String = 'Signin'
  module_Login: String = 'Login'
  module_Overview: String = 'Overview'
  module_Details: String = 'Details'
  module_Scanner: String = 'Scanner'
  module_addDev: String = 'Add'
  module_deleteDev: String = 'Delete'
  module_GetDev: String = 'GetDev'
  module_GiveDev: String = 'GiveDev'

  module_Connection: String = 'Connection'

  StautsError: String = "Err"
  StatusSuccess: String = "Success"

}
