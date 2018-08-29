import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  hotels;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hotels = "all";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
