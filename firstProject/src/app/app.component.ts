import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'helloWorld';
  howMany = 5;
  myArr = ['one', 'two', 'three'];

  myObjsArr = [
    {
      fname: 'John',
      lname: 'Doe',
      bYear: 2001,
    },
    {
      fname: 'Roman',
      lname: 'Iri',
      bYear: 2009,
    },
    {
      fname: 'Ilan',
      lname: 'Gol',
      bYear: 2005,
    },
  ];

  myMethod() {
    return 10;
  }

  shouldShow = true;
  myVar = true
}
