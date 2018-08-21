import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login() {
    this.navCtrl.push(LoginPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  HomePage() {
    this.navCtrl.push(HelloIonicPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }


  

}
