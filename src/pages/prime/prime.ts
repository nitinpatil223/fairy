import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrimeDetailsPage } from '../prime-details/prime-details';

/**
 * Generated class for the PrimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prime',
  templateUrl: 'prime.html',
})
export class PrimePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  primeDetails() {
    this.navCtrl.push(PrimeDetailsPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrimePage');
  }

}
