import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  myDate = new Date();

  myString = "Hello World";

  price = 123.456;

  myNum = 123.45;

  myAnotherNum = 0.75;


  myObj = {
    fname: "john",
    lname: "doe",
    birthYear: 2002
  }

  constructor() { }

  ngOnInit(): void {
  }

}
