import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FilterPage} from '../filter/filter';
import {MessagePage} from '../message/message';

@IonicPage()
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  hotels;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hotels = "all";
  }

 
  filter() {
    this.navCtrl.push(FilterPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }


  message() {
    this.navCtrl.push(MessagePage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

}
