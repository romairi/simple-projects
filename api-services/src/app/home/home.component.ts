import { Component, OnInit } from '@angular/core';
import { Person } from 'src/types/Person';
import { RxjsPeopleServiceService } from '../rxjs-people-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  theHomeArr: Person[] = [];

  constructor(private rxjsPeopleServiceService: RxjsPeopleServiceService) {}

  ngOnInit(): void {
    this.rxjsPeopleServiceService
      .registerToObservablePeopleArr()
      .subscribe((dt) => {
        this.theHomeArr = dt;
      });
    this.rxjsPeopleServiceService.getMyGalleryData();
  }
}
