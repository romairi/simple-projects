import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people-service.service';
import { Person } from 'src/Person';

@Component({
  selector: 'app-people-gallery',
  templateUrl: './people-gallery.component.html',
  styleUrls: ['./people-gallery.component.css'],
})
export class PeopleGalleryComponent implements OnInit {
  people: Map<string, Person> = new Map();

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    if (this.people) {
      this.peopleService.registerToPeopleSubject().subscribe((data) => {
        this.people = data;
      });
    }
  }
}
