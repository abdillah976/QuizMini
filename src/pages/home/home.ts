import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {JouerPage} from "../jouer/jouer";
import {OptionPage} from "../option/option";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad() {
  }

  ionViewDidEnter(){
  }
  jouer(){
    this.navCtrl.push(JouerPage);
  }
  goToOption(){
    this.navCtrl.push(OptionPage);
  }
}
