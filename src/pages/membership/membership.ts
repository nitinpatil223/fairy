import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { PaymentModalPage } from '../payment-modal/payment-modal';

/**
 * Generated class for the MembershipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-membership',
  templateUrl: 'membership.html',
})
export class MembershipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController) {
  }

  paymentModal() {
    const modal = this.modalCtrl.create(PaymentModalPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembershipPage');
  }

}
