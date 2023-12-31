import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'fifth-class';

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.initPeopleService();
    this.peopleService.registerToPeopleSubject().subscribe((people) => {
      people.forEach((curr) => console.log(curr));
    });
  }
}
