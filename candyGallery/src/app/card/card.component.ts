import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() candyName = 'Candy Name';
  @Input() candyImg = 'https://t4.ftcdn.net/jpg/01/35/81/99/240_F_135819993_bSNjZzDBWQwDc8nVhUXQZ3WtMEvPzz4R.jpg';
  @Input() candyShortDescription = 'Candy short description';
  @Input() candyPrice = 0;

  constructor() {}

  ngOnInit(): void {}
}
