import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimePage } from './prime';

@NgModule({
  declarations: [
    PrimePage,
  ],
  imports: [
    IonicPageModule.forChild(PrimePage),
  ],
})
export class PrimePageModule {}
