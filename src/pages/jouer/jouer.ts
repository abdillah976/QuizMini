import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
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
	score: number;
  heart: number;
  joker: number;
	step: number;
	questions: any;
  skipedQuiz: any;
  currentQuiz;
  endQuiz: boolean;// proprieté hidden
  toolbarScore: boolean;
  finalScore: boolean;
  quitte: boolean;
  quizContent: boolean;
  anwserTrue: boolean;
  anwserFalse: boolean;
  toolbarQuiz: boolean;
  toolbarNext: boolean;
  toolbarClassement: boolean;
  jokerSection: boolean;
  jokerItem1: boolean;
  jokerItem2: boolean;

  constructor(private questionProvider: QuestionProvider,public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
    // this.questions = this.questionProvider.getQuestions();
    // Initialise les questions au chargement de la page
    // this.displayQuiz();
    this.init();
  }

  init(){
    this.score = 0;
    this.heart = 3;
    this.joker = 2;
    this.step = 10;
    this.skipedQuiz = [];
    this.questions = [];
    // this.currentQuiz = null;
    this.endQuiz = true;// proprieté hidden
    this.toolbarScore = true;
    this.finalScore = true;
    this.quitte = false;
    this.quizContent = false;
    this.anwserTrue = true;
    this.anwserFalse = true;
    this.toolbarQuiz = false;
    this.toolbarNext = true;
    this.toolbarClassement = true;
    this.jokerSection = true;
    this.jokerItem1 = false;
    this.jokerItem2 = false;
    this.questions = this.questionProvider.getQuestions();

    this.displayQuiz();
    this.log();
  }

  // Vérifie la réponse choisi
  checkAnwser(anwser){
    if(this.endQuiz){
      if (anwser === 'joker'){
          console.log('joker');
          console.log(this.joker);
        this.showConfirm();
          // Cache la section joker
          // this.jokerSection = true;
      }else if(anwser === this.currentQuiz.anwser){
        console.log('bonne réponse');
        this.anwserTrue = false;
        this.score = this.score + this.step;
        this.switchToolbar();
      }else{
        console.log('mauvaise réponse');
        this.anwserFalse = false;
        this.heart--;
        this.switchToolbar();
      }
    }
    this.isEndQuiz();
  }
  // Affiche une question
  displayQuiz(){
    let rand = Math.floor((Math.random() * this.questions.length) + 0);
    // if(this.questions.length) {
      console.log('Avant suppression');
      console.log(this.questions);
      this.currentQuiz = this.questions[rand];
      this.questions.splice(rand,1);
      this.questions = this.questions.filter(res => res != null);
      console.log('Après suppression');
      console.log(this.questions);
    // }else{
    //   this.endQuiz = false;
    // }
  }
  // Méthode Delete
  displayQuizOld(){
    let rand = Math.floor((Math.random() * this.questions.length) + 0);
    // if(this.questions.length) {
    console.log('Avant suppression');
    console.log(this.questions);
    this.currentQuiz = this.questions[rand];
    delete this.questions[rand];
    this.questions = this.questions.filter(res => res != null);
    console.log('Après suppression');
    console.log(this.questions);
    // }else{
    //   this.endQuiz = false;
    // }
  }
  // Affiche la question suivante
  nextQuiz(){
    // Masque le message joker
    if(!this.jokerSection){
      this.jokerSection = true;
    }
    this.displayQuiz();
    this.anwserTrue = true;
    this.anwserFalse = true;
    this.toolbarQuiz = false;
    this.toolbarNext = true;
  }
  isEndQuiz(){
    if(this.questions.length == 0 || this.heart < 1) {
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

    this.log();
  }
  goClassement(){
    console.log('classement');
  }
  showConfirm() {
    let confirm = this.alertCtrl.create({
      message: 'Passer cette question ?',
      buttons: [
        {
          text: 'Non',
          handler: () => {
            console.log('Non');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            console.log('Oui');
            if(this.joker) {
              this.skipedQuiz.push(this.currentQuiz);
              this.anwserFalse = false;
              this.joker--;
              // Masque un joker
              // if(this.jokerItem1 ==  false){
              //   this.jokerItem1 = true;
              // }else if(this.jokerItem2 ==  false){
              //   this.jokerItem2 = true;
              // }
              // this.jokerSection = false;
              this.switchToolbar();
            }
          }
        }
      ]
    });
    confirm.present();
  }
  switchToolbar(){
    // cache la toolbar vrai/faux
    this.toolbarQuiz = true;
    // affiche le bouton suivant
    this.toolbarNext = false;
  }
  rePlay(){
    this.init();
  }
  log(){
    console.log('/////// INIT ////////////');
    console.log(this.score);
    console.log(this.heart);
    console.log(this.joker);
    console.log(this.step);
    console.log('questions:');
    console.log(this.questions);
    console.log('questionsSkiped:');
    console.log(this.skipedQuiz);
    console.log(this.currentQuiz);
    console.log(this.endQuiz);// proprieté hidden
    console.log(this.toolbarScore);
    console.log(this.finalScore);
    console.log(this.quitte);
    console.log(this.quizContent);
    console.log(this.anwserTrue);
    console.log(this.anwserFalse);
    console.log(this.toolbarQuiz);
    console.log(this.toolbarNext);
    console.log(this.toolbarClassement);
    console.log(this.jokerSection);
    console.log(this.jokerItem1);
    console.log(this.jokerItem2);
    console.log("service question");
    console.log(this.questionProvider.getQuestions());
    console.log('/////// INIT ////////////');
  }

  test() {
    console.log('test click sur enfant');
  }
}
