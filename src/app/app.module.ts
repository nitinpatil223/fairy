import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';

import { SignupPage } from '../pages/signup/signup';
import { HotelsPage } from '../pages/hotels/hotels';

import { FilterPage } from '../pages/filter/filter';
import { MessagePage } from '../pages/message/message';
import { HotelDetailsPage } from '../pages/hotel-details/hotel-details';
import { BookTablePage } from '../pages/book-table/book-table';
import { PrimePage } from '../pages/prime/prime';
import { PrimeDetailsPage } from '../pages/prime-details/prime-details';
import { ModalPage } from '../pages/modal/modal';
import { PaymentModalPage } from '../pages/payment-modal/payment-modal';
import { MembershipPage } from '../pages/membership/membership';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { YourOrdersPage } from '../pages/your-orders/your-orders'



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
     MyApp,
    //   WelcomePage,
    //  LoginPage,
    //  SignupPage,
    //  HotelsPage,
    //   FilterPage,
    //   MessagePage,
    //   HotelDetailsPage,
    //   BookTablePage,
    //   PrimePage,
    //   PrimeDetailsPage,
    //  ModalPage,
    //  MembershipPage,
    //  PaymentModalPage,
    // ForgotPasswordPage,
    // ProfilePage,
    // EditProfilePage,
    // ChangePasswordPage,
    // YourOrdersPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    LoginPage,
    SignupPage,
    HotelsPage,
    FilterPage,
    MessagePage,
    HotelDetailsPage,
    BookTablePage,
    PrimePage,
    PrimeDetailsPage,
    ModalPage,
    MembershipPage,
    PaymentModalPage,
    ForgotPasswordPage,
    ProfilePage,
    EditProfilePage,
    ChangePasswordPage,
    YourOrdersPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
