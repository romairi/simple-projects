import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  candies = [
    {
      candyName: 'Chocolate',
      candyImg: 'https://t4.ftcdn.net/jpg/01/35/81/99/240_F_135819993_bSNjZzDBWQwDc8nVhUXQZ3WtMEvPzz4R.jpg',
      candyShortDescription: 'Candy short description',
      candyPrice: 5,
    },
    {
      candyName: 'Wafers',
      candyImg: 'https://t4.ftcdn.net/jpg/01/35/81/99/240_F_135819993_bSNjZzDBWQwDc8nVhUXQZ3WtMEvPzz4R.jpg',
      candyShortDescription: 'Candy short description',
      candyPrice: 8,
    },
    {
      candyName: 'Lollypop',
      candyImg: 'https://t4.ftcdn.net/jpg/01/35/81/99/240_F_135819993_bSNjZzDBWQwDc8nVhUXQZ3WtMEvPzz4R.jpg',
      candyShortDescription: 'Candy short description',
      candyPrice: 12,
    },
    {
      candyName: 'Marshmallow',
      candyImg: 'https://t4.ftcdn.net/jpg/01/35/81/99/240_F_135819993_bSNjZzDBWQwDc8nVhUXQZ3WtMEvPzz4R.jpg',
      candyShortDescription: 'Candy short description',
      candyPrice: 15,
    },
    {
      candyName: 'Ice-Cream',
      candyImg: 'https://t4.ftcdn.net/jpg/01/35/81/99/240_F_135819993_bSNjZzDBWQwDc8nVhUXQZ3WtMEvPzz4R.jpg',
      candyShortDescription: 'Candy short description',
      candyPrice: 20,
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
