import { Component, OnInit } from '@angular/core';
import { Person } from 'src/types/Person';
import { PeopleInfoService } from '../people-info.service';
import { PersonFromAPI } from '../../types/PersonFromAPI';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  peopleArr: Person[] = [];
  url = 'https://randomuser.me/api/?results=50';

  getMyGalleryData() {
    fetch(this.url)
      .then((dataFromApi) => {
        return dataFromApi.json();
      })
      .then((dataAsObj) => {
        this.peopleArr = dataAsObj.results.map((p: PersonFromAPI): Person => {
          return {
            firstName: p.name.first,
            lastName: p.name.last,
            email: p.email,
            picUrl: p.picture.large,
          };
        });
      })
      .catch(() => {});
  }

  constructor(private peopleInfoService: PeopleInfoService) {}

  ngOnInit(): void {
    // this.peopleArr = this.peopleInfoService.getAllPeopleDataStatic();
    this.getMyGalleryData();
  }
}
