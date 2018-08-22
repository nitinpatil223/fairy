import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { BookTablePage } from '../book-table/book-table';
import { PrimePage } from '../prime/prime';


import { ModalPage } from '../modal/modal';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }


  presentModal() {
    const modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  bookTable() {
    this.navCtrl.push(BookTablePage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  openPrime() {
    this.navCtrl.push(PrimePage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelDetailsPage');
  }

}

