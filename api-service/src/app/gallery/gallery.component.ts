import { Component, OnInit } from '@angular/core';
import { results } from '../../data/people';
import { Person } from 'src/types/Person';
import { PeopleInfoService } from '../people-info.service';
import { PersonFromAPI } from '../../types/PersonFromAPI';
import { RxjsPeopleServiceService } from '../rxjs-people-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  peopleArr: Person[] = [];

  myMessageFromService(data: Person[]) {
    console.log("GalleryComponent", data);
    this.peopleArr = [...data];
    // change what we wish on screen
  }



  constructor(private peopleInfoService: PeopleInfoService, private rxjsPeopleServiceService: RxjsPeopleServiceService) {
  }

  ngOnInit(): void {
    // this.peopleArr = this.peopleInfoService.getAllPeopleDataStatic();

    /*
    this.peopleInfoService.registerToDataUpdates(this.myMessageFromService.bind(this));
    this.peopleInfoService.getMyGalleryData();
    */

    this.rxjsPeopleServiceService
      .registerToObservablePeopleArr()
      .subscribe((data) => {
        console.log("data is", data[0].firstName);
        this.peopleArr = [...data];
      });

    this.rxjsPeopleServiceService.getMyGalleryData();

  }

}
