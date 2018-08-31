import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FilterPage} from '../filter/filter';
import { MessagePage } from '../message/message';
import { HotelDetailsPage } from '../hotel-details/hotel-details';
import { MembershipPage } from '../membership/membership';

@IonicPage()
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html'
})
export class HotelsPage {
  hotels;
  public show = true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hotels = "all";
  }

  showPrime() {
    this.show = !this.show;
  }

 
  filter() {
    this.navCtrl.push(FilterPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }


  message() {
    this.navCtrl.push(MessagePage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  hotelDetails() {
    this.navCtrl.push(HotelDetailsPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  membership() {
    this.navCtrl.push(MembershipPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }


}
