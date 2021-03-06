import {Component, EventEmitter, OnInit, Input, OnChanges, Output} from '@angular/core';
@Component({
  selector: 'joker',
  templateUrl: 'joker.html'
})
export class JokerComponent implements OnInit, OnChanges{
  @Input('inputJoker') nbJoker: number;
  @Output() outChild = new EventEmitter();

  jokers: number[] = [];
  cuerrentJokers: number[] = [];


  constructor() {
    console.log('Hello JokerComponent Component');
  }


  ngOnInit() {
    this.init();
  }

  displayJoker(){
    let item;
    for(let i = 0; i < this.nbJoker; i++){
      item += '<img src="assets/imgs/joker_dc.png" (click)="checkAnwser(\'joker\')" >';
    }
    return item;
  }

  init(){
    if(this.nbJoker > 0){
      for(let i = 0; i < this.nbJoker; i++){
        this.jokers.push(i);
      }
    }
    this.cuerrentJokers = this.jokers.slice();
    this.jokers = [];
  }

  callParent(){

    this.outChild.emit(null);
  }

  ngOnChanges(){
    this.init();
  }

}
