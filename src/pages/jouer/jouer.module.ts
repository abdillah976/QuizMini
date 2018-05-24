import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JouerPage } from './jouer';

@NgModule({
  declarations: [
    JouerPage,
  ],
  imports: [
    IonicPageModule.forChild(JouerPage),
  ],
})
export class JouerPageModule {}
