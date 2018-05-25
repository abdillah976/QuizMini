import {Component, Input} from '@angular/core';

/**
 * Generated class for the HeartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'heart',
  templateUrl: 'heart.html'
})
export class HeartComponent {
@Input('inputHeart') nbHeart: number;

  constructor() {
    console.log('Hello HeartComponent Component');
  }

  displayHeart(){
    let item ='';
    for (let i = 0; i < this.nbHeart; i++){
      item += '<span class="inlineHeart"><img src="assets/imgs/coeur.jpg"/></span>';
    }
    return item;
  }
}
