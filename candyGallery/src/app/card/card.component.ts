import { Component, Input, OnInit } from '@angular/core';
import { Candy } from 'src/Candy';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // @Input() candyName = "candy Name";
  // @Input() theimg = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlOF9pc29sYXRlZF9waG90b19vZl9hX2Nob2NvbGF0ZV9iYXJfY2xlYW5fd2hpdGVfYl9jOTBkMjU2Mi05MDJjLTQyZmItYjMxZi00MDdlZjc3M2VmMTMucG5n.png";
  // @Input() CandyShortDescription = "Candy short description";
  // @Input() candyPrice = 5;
  @Input() candyInfo: Candy | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
