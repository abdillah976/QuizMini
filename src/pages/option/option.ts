import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {OptionProvider} from "../../providers/option/option";
import {Option} from "../../model/Option";

@IonicPage()
@Component({
  selector: 'page-option',
  templateUrl: 'option.html',
})
export class OptionPage{
  testRadioOpenLevel:boolean;
  testRadioOpenTheme:boolean;
  testRadioResultLevel:any;
  testRadioResultTheme:any;
  checkEffects:boolean;
  optionsGame:Option;

  constructor(private optionProvider: OptionProvider, public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
    this.init();
  }
  init(){
    this.optionsGame = this.optionProvider.getAll();
    console.log('init options');
    console.log(this.optionsGame.level);
  }
  ionViewDidEnter(){
    this.init();
    console.log('ionViewDidEnter OptionPage');
    console.log(this.optionsGame);

  }
  updateEffetct(){
    this.optionProvider.setEffectsQuiz(this.optionsGame.effects);
  }

  showRadioLevel() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Niveau');

    alert.addInput({
      type: 'radio',
      label: 'Facile',
      value: 'facile',
      checked: this.levelDefaultLoadFacile()
    });
    alert.addInput({
      type: 'radio',
      label: 'Intermédiaire',
      value: 'intermédiaire',
      checked: this.levelDefaultLoadIntermediaire()
    });
    alert.addInput({
      type: 'radio',
      label: 'Difficile',
      value: 'difficile',
      checked: this.levelDefaultLoadDifficile()
    });

    alert.addButton('Retour');
    alert.addButton({
      text: 'Valider',
      handler: data => {
        this.testRadioOpenLevel = false;
        this.testRadioResultLevel = data;
        this.optionProvider.setLevelQuiz(data);
      }
    });
    alert.present();

  }
  showRadioTheme() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Theme');

    alert.addInput({
      type: 'radio',
      label: 'Défaut',
      value: 'defaut',
      checked: true
    });

    alert.addButton('Retour');
    alert.addButton({
      text: 'Valider',
      handler: data => {
        this.testRadioOpenTheme = false;
        this.testRadioResultTheme = data;
        this.optionProvider.setThemeQuiz(data);
      }
    });
    alert.present();
  }
  levelDefaultLoadFacile() {
    if (this.optionsGame.level == 'facile') {
      return true;
    }
    else {
      return false;
    }
  }
  levelDefaultLoadIntermediaire() {
    if (this.optionsGame.level == 'intermédiaire') {
      return true;
    }
    else {
      return false;
    }
  }
  levelDefaultLoadDifficile() {
    if(this.optionsGame.level == 'difficile'){
      return true;
    }
    else {
      return false;
    }
  }
}
