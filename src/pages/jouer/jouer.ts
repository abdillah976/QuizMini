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
  toolbarScore: boolean = true;
  finalScore: boolean = true;
  quitte: boolean = false;
  quizContent: boolean = false;
  anwserTrue: boolean = true;
  anwserFalse: boolean = true;
  toolbarQuiz: boolean = false;
  toolbarNext: boolean = true;
  toolbarClassement: boolean = true;

  constructor(private questionProvider: QuestionProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.questions = this.questionProvider.getQuestions();
    // Initialise les questions au chargement de la page
    this.displayQuiz();
  }

  // Vérifie la réponse choisi
  checkAnwser(anwser){
    if(this.endQuiz){
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
    }
    this.isEndQuiz();

      // cache la toolbar vrai/faux
      this.toolbarQuiz = true;
      // affiche le bouton suivant
      this.toolbarNext = false;
  }
  // Affiche une question
  displayQuiz(){
    let rand = Math.floor((Math.random() * this.questions.length) + 0);
    // if(this.questions.length) {
      console.log(this.questions);
      this.currentQuiz = this.questions[rand];
      delete this.questions[rand];
      this.questions = this.questions.filter(res => res != null);
      console.log(this.questions);
    // }else{
    //   this.endQuiz = false;
    // }
  }
  // Affiche la question suivante
  nextQuiz(){
      this.displayQuiz();
      this.anwserTrue = true;
      this.anwserFalse = true;
      this.toolbarQuiz = false;
      this.toolbarNext = true;
  }
  isEndQuiz(){
    if(this.questions.length == 0 || this.vie < 1) {
      console.log("endQuiz");
      this.endQuiz = false;
      this.toolbarScore = false;
      return true;
    }else{
      console.log("continue");
      this.endQuiz = true;
      this.toolbarScore = true;
      return false;
    }
  }
  displayScore(){
    // Affiche la div score
    this.finalScore = false;
    // Cache la section question
    this.quizContent= true;
    // Affiche la toolbar classement
    this.toolbarClassement = false;
    // Cache la toobarScore
    this.toolbarScore = true;
  }
  goClassement(){
    console.log('classement');
  }
}
