import { Component, Input, OnInit, Output } from '@angular/core';
import { PeopleService } from '../people-service.service';
import { Person } from 'src/Person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css'],
})
export class PersonCardComponent implements OnInit {
  @Input() person: Person | undefined;
  isFavorite = false;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    if (this.person) {
      this.isFavorite = this.peopleService.isFavorite(this.person?.uuid);
    }
  }

  handleClickFavoriteBtn() {
    if (this.person) {
      this.isFavorite
        ? this.peopleService.removeFromFavorites(this.person?.uuid)
        : this.peopleService.addToFavorites(this.person?.uuid);
        // TODO: change to observable pattern favorite status
        this.isFavorite = !this.isFavorite;
    }
  }
}
