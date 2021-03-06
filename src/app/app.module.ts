import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';
import { SigninPage } from '../pages/signin/signin';
import { AlertServiceProvider } from '../providers/alert-service/alert-service';
import { ErrorServiceProvider } from '../providers/error-service/error-service';
import { AlertStringsProvider } from '../providers/alert-strings/alert-strings';
import { GeneralStringsProvider } from '../providers/general-strings/general-strings';
import { OverviewPage } from '../pages/overview/overview';
import { DeviceStorageProvider } from '../providers/device-storage/device-storage';
import { DeviceComponent } from '../components/device/device';
import { DetailsPage } from '../pages/details/details';
import { AddDevicePage } from '../pages/add-device/add-device';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ScanningPage } from '../pages/scanning/scanning';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    OverviewPage,
    DetailsPage,
    AddDevicePage,
    ScanningPage,
    DeviceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    OverviewPage,
    DetailsPage,
    AddDevicePage,
    ScanningPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true },
    HttpServiceProvider,
    AuthInterceptorProvider,
    AlertServiceProvider,
    AlertStringsProvider,
    ErrorServiceProvider,
    GeneralStringsProvider,
    DeviceStorageProvider
  ]
})
export class AppModule {}
