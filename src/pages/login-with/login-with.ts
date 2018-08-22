import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {HotelsPage } from '../hotels/hotels';

/**
 * Generated class for the LoginWithPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-with',
  templateUrl: 'login-with.html',
})
export class LoginWithPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }



  login() {
    this.navCtrl.push(LoginPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  HomePage() {
    this.navCtrl.setRoot(HotelsPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginWithPage');
  }

}
