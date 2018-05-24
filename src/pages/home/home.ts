import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {JouerPage} from "../jouer/jouer";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  jouer(){
    this.navCtrl.push(JouerPage);
  }
}
