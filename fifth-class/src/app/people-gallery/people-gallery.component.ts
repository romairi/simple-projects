import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people-service.service';
import { Person } from 'src/Person';

@Component({
  selector: 'app-people-gallery',
  templateUrl: './people-gallery.component.html',
  styleUrls: ['./people-gallery.component.css']
})
export class PeopleGalleryComponent implements OnInit {
  people: Person[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService.getPeopleMap().subscribe(map => {
      this.people = Array.from(map.values());
    });
  }

}
