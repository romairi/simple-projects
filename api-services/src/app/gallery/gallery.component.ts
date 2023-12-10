import { Component, OnInit } from '@angular/core';
import { Person } from 'src/types/Person';
import { PeopleInfoService } from '../people-info.service';
import { RxjsPeopleServiceService } from '../rxjs-people-service.service';

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

  constructor(
    private peopleInfoService: PeopleInfoService,
    private rxjsPeopleServiceService: RxjsPeopleServiceService
  ) {}

  ngOnInit(): void {
    this.rxjsPeopleServiceService
      .registerToObservablePeopleArr()
      .subscribe((data) => {
        console.log('data is ', data[0].firstName);
        this.peopleArr = [...data];
      });

    this.rxjsPeopleServiceService.getMyGalleryData();
  }

  /*
  ngOnInit(): void {
    // *****  first version **********
    // this.peopleArr = this.peopleInfoService.getAllPeopleDataStatic();


    // *****  second version **********
    // this.peopleInfoService.registerToDataUpdates(
    //   this.myMessageFromService.bind(this)
    // );
    // this.peopleInfoService.getMyGalleryData();
  }
  */
}
