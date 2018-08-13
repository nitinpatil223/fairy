import { Component, Renderer, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';

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
  @ViewChild('pageRef') pageRef: ElementRef;
  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer, public viewCtrl: ViewController, private el: ElementRef) {
    // this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'waiting-popup', true);
  }


  
  welcome() {
    this.navCtrl.push(HelloIonicPage, {}, { animate: true, animation: 'transition', duration: 1000, direction: 'forward' });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookTablePage');
  }

}
