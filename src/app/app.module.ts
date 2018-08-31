import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { LoginWithPage } from '../pages/login-with/login-with';
import { SignupPage } from '../pages/signup/signup';
import { HotelsPage } from '../pages/hotels/hotels';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ProductsPage } from '../pages/products/products';
import { FilterPage } from '../pages/filter/filter';
import { MessagePage } from '../pages/message/message';
import { HotelDetailsPage } from '../pages/hotel-details/hotel-details';
import { BookTablePage } from '../pages/book-table/book-table';
import { PrimePage } from '../pages/prime/prime';
import { PrimeDetailsPage } from '../pages/prime-details/prime-details';
import { ModalPage } from '../pages/modal/modal';
import { PaymentModalPage } from '../pages/payment-modal/payment-modal';
import { MembershipPage } from '../pages/membership/membership';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    //  WelcomePage,
    //  LoginPage,
    // LoginWithPage,
    // SignupPage,
    // HotelsPage,
    ItemDetailsPage,
    ListPage,
    //  ProductsPage,
    //  FilterPage,
    //  MessagePage,
    //  HotelDetailsPage,
    //  BookTablePage,
    //  PrimePage,
    //  PrimeDetailsPage,
    // ModalPage,
    // MembershipPage,
    // PaymentModalPage

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
    LoginWithPage,
    SignupPage,
    HotelsPage,
    ItemDetailsPage,
    ListPage,
    ProductsPage,
    FilterPage,
    MessagePage,
    HotelDetailsPage,
    BookTablePage,
    PrimePage,
    PrimeDetailsPage,
    ModalPage,
    MembershipPage,
    PaymentModalPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
