import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HotelsPage} from '../hotels/hotels';
import {SignupPage} from '../signup/signup';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  HomePage() {
    this.navCtrl.push(HotelsPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  signUp() {
    this.navCtrl.push(SignupPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }
}
