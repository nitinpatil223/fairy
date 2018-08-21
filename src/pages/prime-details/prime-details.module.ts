import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrimeDetailsPage } from './prime-details';

@NgModule({
  declarations: [
    PrimeDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrimeDetailsPage),
  ],
})
export class PrimeDetailsPageModule {}
