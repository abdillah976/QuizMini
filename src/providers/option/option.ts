import { Injectable } from '@angular/core';
import { Option} from "../../model/Option";

@Injectable()
export class OptionProvider {
  // private levelQuiz: string;
  // private theme: string;
  // private checkEffects: boolean;
  private optionsGame: any;
  constructor() {
    console.log('Hello OptionProvider Provider');
    this.init();
  }

  init(){
    console.log('INIT PROVIDERS');
    // Valeur par défaut
    if(this.setFromLocalstorage() == null){
      this.setDefaultValues();
    }
    console.log(this.optionsGame);
  }

  setLevelQuiz(level: any){
    this.optionsGame.level = level;
  }

  setThemeQuiz(theme: any){
    this.optionsGame.theme = theme;
  }

  setEffectsQuiz(effects: any){
    this.optionsGame.effects = effects;
    console.log('Insert effects' + effects);
  }

  getEffectsQuiz(){
    return this.optionsGame.effects;
  }
  getAll(){
    return this.optionsGame;
  }
  mesLog(){
    console.log(this.optionsGame);
  }
  setDefaultValues(){
    this.optionsGame = new Option('facile', 'defaut', true);
  }
  // TO DO
  // Charger données depuis localstorage si exist
  setFromLocalstorage(){
    this.optionsGame = null;
    return this.optionsGame;
  }
}
