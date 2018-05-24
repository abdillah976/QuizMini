import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question } from '../../model/Question';
import { QuestionProvider } from '../../providers/question/question';
/**
 * Generated class for the JouerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-jouer',
  templateUrl: 'jouer.html',
})
export class JouerPage {
	score: number = 0;
	vie: number = 3;
  joker: number = 2;
	step: number = 10;
	questions: Question[] = [];
  skipedQuiz: Question[] = [];
  currentQuiz: Question;
  endQuiz: boolean = true;// proprieté hidden
  quitte: boolean = false;
  anwserTrue: boolean = true;
  anwserFalse: boolean = true;
  toolbarQuiz: boolean = false;
  toolbarNext: boolean = true;

  constructor(private questionProvider: QuestionProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.questions = this.questionProvider.getQuestions();
    // this.questions = this.randomize(this.questions);
    // Initialise les questions au chargement de la page
    this.displayQuiz();
  }

  checkAnwser(anwser){
      if (anwser === 'joker'){
        console.log('joker');
        this.skipedQuiz.push(this.currentQuiz);
        this.anwserFalse = false;
        this.joker--;
      }else if(anwser === this.currentQuiz.anwser){
        console.log('bonne réponse');
        this.anwserTrue = false;
        this.score = this.score + this.step;
      }else{
        console.log('mauvaise réponse');
        this.anwserFalse = false;
        this.vie--;
      }
      this.toolbarQuiz = true;
      this.toolbarNext = false;
  }
  displayQuiz(){
    let rand = Math.floor((Math.random() * this.questions.length) + 0);
    if(this.questions.length) {
      console.log(this.questions);
      this.currentQuiz = this.questions[rand];
      delete this.questions[rand];
      this.questions = this.questions.filter(res => res != null);
      console.log(this.questions);
    }else{
      this.endQuiz = false;
    }
  }
  // Affiche la question suivante
  nextQuiz(){
    if(this.isEndQuiz()){
      // affichage de la page score
      
    }else {
      this.displayQuiz();
      this.anwserTrue = true;
      this.anwserFalse = true;
      this.toolbarQuiz = false;
      this.toolbarNext = true;
    }
  }
  isEndQuiz(){
    console.log("passage");
    if(this.questions.length || this.vie < 1) {
      this.endQuiz = true;
      return false;
    }else{
      this.endQuiz = false;
      return true;
    }
  }
  isJokerUsed(){
    return false;
  }
}
