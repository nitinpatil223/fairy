import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { LoginWithPage } from '../pages/login-with/login-with';
import { SignupPage } from '../pages/signup/signup';
import { HotelsPage } from '../pages/hotels/hotels';
import { ListPage } from '../pages/list/list';
import { ProductsPage } from '../pages/products/products';
import { FilterPage } from '../pages/filter/filter';
import { MessagePage } from '../pages/message/message';
import { HotelDetailsPage } from '../pages/hotel-details/hotel-details';
import { BookTablePage } from '../pages/book-table/book-table';
import { PrimePage } from '../pages/prime/prime';
import { PrimeDetailsPage } from '../pages/prime-details/prime-details';
import { ModalPage } from '../pages/modal/modal';
import { MembershipPage } from '../pages/membership/membership';
import { PaymentModalPage } from '../pages/payment-modal/payment-modal';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = WelcomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
  
      { title: 'ListPage', component: ListPage },
      { title: 'ProductsPage', component: ProductsPage },
     
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
