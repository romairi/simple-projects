import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  candies = [
    {
      candyName: "Chocolate",
      theimg: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlOF9pc29sYXRlZF9waG90b19vZl9hX2Nob2NvbGF0ZV9iYXJfY2xlYW5fd2hpdGVfYl9jOTBkMjU2Mi05MDJjLTQyZmItYjMxZi00MDdlZjc3M2VmMTMucG5n.png",
      CandyShortDescription: "Candy short description",
      candyPrice: 5
    },
    {
      candyName: "lollypop",
      theimg: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlOF9pc29sYXRlZF9waG90b19vZl9hX2Nob2NvbGF0ZV9iYXJfY2xlYW5fd2hpdGVfYl9jOTBkMjU2Mi05MDJjLTQyZmItYjMxZi00MDdlZjc3M2VmMTMucG5n.png",
      CandyShortDescription: "Candy short description",
      candyPrice: 4
    },
    {
      candyName: "Waffers",
      theimg: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlOF9pc29sYXRlZF9waG90b19vZl9hX2Nob2NvbGF0ZV9iYXJfY2xlYW5fd2hpdGVfYl9jOTBkMjU2Mi05MDJjLTQyZmItYjMxZi00MDdlZjc3M2VmMTMucG5n.png",
      CandyShortDescription: "Candy short description",
      candyPrice: 12
    },
    {
      candyName: "Marshmello",
      theimg: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlOF9pc29sYXRlZF9waG90b19vZl9hX2Nob2NvbGF0ZV9iYXJfY2xlYW5fd2hpdGVfYl9jOTBkMjU2Mi05MDJjLTQyZmItYjMxZi00MDdlZjc3M2VmMTMucG5n.png",
      CandyShortDescription: "Candy short description",
      candyPrice: 6
    },
    {
      candyName: "Cookies",
      theimg: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlOF9pc29sYXRlZF9waG90b19vZl9hX2Nob2NvbGF0ZV9iYXJfY2xlYW5fd2hpdGVfYl9jOTBkMjU2Mi05MDJjLTQyZmItYjMxZi00MDdlZjc3M2VmMTMucG5n.png",
      CandyShortDescription: "Candy short description",
      candyPrice: 7
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
