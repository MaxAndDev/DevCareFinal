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
import { TokenStorageProvider } from '../providers/token-storage/token-storage';
import { AuthInterceptorProvider } from '../providers/auth-interceptor/auth-interceptor';
import { SigninPage } from '../pages/signin/signin';
import { ErrorServiceProvider } from '../providers/error-service/error-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage
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
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorProvider, multi: true },
    HttpServiceProvider,
    TokenStorageProvider,
    AuthInterceptorProvider
    TokenStorageProvider,
    ErrorServiceProvider
  ]
})
export class AppModule {}
