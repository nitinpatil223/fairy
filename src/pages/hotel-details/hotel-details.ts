import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookTablePage } from '../book-table/book-table';

/**
 * Generated class for the HotelDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotel-details',
  templateUrl: 'hotel-details.html',
})
export class HotelDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  bookTable() {
    this.navCtrl.push(BookTablePage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelDetailsPage');
  }

}
