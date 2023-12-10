import { Component, OnInit } from '@angular/core';
import { Person } from 'src/types/Person';
import { PeopleInfoService } from '../people-info.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  peopleArr: Person[] = [];

  myMessageFromService(data: Person[]) {
    this.peopleArr = data;
  }

  constructor(private peopleInfoService: PeopleInfoService) {}

  ngOnInit(): void {
    // this.peopleArr = this.peopleInfoService.getAllPeopleDataStatic();
    this.peopleInfoService.registerToDataUpdates(
      this.myMessageFromService.bind(this)
    );
    this.peopleInfoService.getMyGalleryData();
  }
}
