import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../types/Person';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() thePersonOfTheCard: Person | undefined;

  /*
  myNum = 5;
  myFunc = () => {
    return "welcome";
  }
  myOtherFunc = () => {
    return 10;
  }
  myStr = "hello world ${this.myNum} ";
  myStr2 = `hello world ${this.myNum} shalom ${this.myFunc()}, ${this.myOtherFunc()}`;
*/

  constructor() { }

  ngOnInit(): void {
  }

}
