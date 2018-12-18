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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    OverviewPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    OverviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true },
    HttpServiceProvider,
    AuthInterceptorProvider,
    AlertServiceProvider,
    ErrorServiceProvider,
    GeneralStringsProvider
  ]
})
export class AppModule {}
