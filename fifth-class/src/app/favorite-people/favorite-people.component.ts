import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people-service.service';
import { Person } from 'src/Person';

@Component({
  selector: 'app-favorite-people',
  templateUrl: './favorite-people.component.html',
  styleUrls: ['./favorite-people.component.css'],
})
export class FavoritePeopleComponent implements OnInit {
  favoritePeople: Person[] = [] ;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.registerToPeopleSubject().subscribe((peopleData) => {
      // this.favoritePeople = this.peopleService.getAllFavorites();
    });
  }
}
