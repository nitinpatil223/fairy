import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotelsPage } from './hotels';

@NgModule({
  declarations: [
    HotelsPage,
  ],
  imports: [
    IonicPageModule.forChild(HotelsPage),
  ],
  // exports:[
  //   FilterPage
  // ]
})
export class HotelsPageModule {}
