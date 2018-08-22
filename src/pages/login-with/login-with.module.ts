import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginWithPage } from './login-with';

@NgModule({
  declarations: [
    LoginWithPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginWithPage),
  ],
})
export class LoginWithPageModule {}
