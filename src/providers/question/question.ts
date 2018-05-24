import { Injectable } from '@angular/core';

/*
  Generated class for the QuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const QUESTIONS = [
  {id:1, label:'Le degré d’alcool n’a aucun impact sur la couleur d’une bière.', anwser: true, description: "La réponse est VRAI. La couleur de la bière provient de la sorte de grains utilisés et de leur degré de torréfaction. Plus les grains sont torréfiés, plus la robe est foncée.", category:'chimie'},
	{id:2, label:'Il y a environ 1,3 milliard de bêtes d’élevage dans le monde.', anwser: true, description: "La réponse est VRAI. Il y a environ 1,3 milliard de bêtes d’élevage dans le monde. Ces animaux consomment le tiers des céréales.", category:'geographie'},
  {id:3, label:'Environ 25 % de la population vit à moins de 150 km (93 mi) de la mer. ', anwser: false, description: "La réponse est FAUX. C’est environ 44 % de la population mondiale qui vit à moins de 150 km (93 mi) de la mer.", category:'geographie'},
  {id:4, label:"L’acide de l’estomac est si puissant qu’il peut trouer un morceau de bois.", anwser: true, description: "La réponse est VRAI. L’acide de l’estomac est si puissant qu’il peut trouer un morceau de bois. Il peut même dissoudre certains métaux.", category:'education'},
	{id:5, label:'Nous utilisons seulement 10 % de notre cerveau.', anwser: false, description: "La réponse est FAUX. Nous utilisons toutes les parties de notre cerveau, mais pas toutes en même temps.", category:'biologie'}
];

@Injectable()
export class QuestionProvider {
  constructor() {
    console.log('Hello QuestionProvider Provider');
  }
  getQuestions(){
  	return QUESTIONS;
  }
  // Choisi une question au hasard
  getFirstQuiz(){
    const rand = Math.floor((Math.random() * QUESTIONS.length) + 0);
    return QUESTIONS[rand];
  }
}
