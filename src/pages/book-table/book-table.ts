import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HotelsPage } from '../hotels/hotels';

/**
 * Generated class for the BookTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-table',
  templateUrl: 'book-table.html',
})
export class BookTablePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  welcome() {
    this.navCtrl.push(HotelsPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookTablePage');
  }

}
