import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../people-service.service';
import { Person } from 'src/Person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  @Input() person: Person | undefined;

  constructor(private peopleService: PeopleService) {}


  ngOnInit(): void {
    
  }

  addToFavorites(uuid: string) {
    this.peopleService.addToFavorites(uuid);
  }

  isFavorite(uuid: string): boolean {
    return this.peopleService.isFavorite(uuid);
  }

}
