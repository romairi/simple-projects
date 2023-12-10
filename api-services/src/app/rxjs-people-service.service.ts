import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Person } from 'src/types/Person';
import { results } from '../data/people';
import { PersonFromAPI } from 'src/types/PersonFromAPI';

@Injectable({
  providedIn: 'root',
})
export class RxjsPeopleServiceService {
  url = 'https://randomuser.me/api/?results=50';
  peopleArrObserve = new Subject<Person[]>();
  peopleArr: Person[] = [];

  constructor() {}

  registerToObservablePeopleArr(): Observable<Person[]> {
    return this.peopleArrObserve;
  }

  getMyGalleryData() {
    fetch(this.url)
      .then((dataFromAPI) => {
        return dataFromAPI.json();
      })
      .then((dataAsObj: { results: PersonFromAPI[] }) => {
        this.peopleArr = [...dataAsObj.results].map((curr) => {
          return {
            firstName: curr.name.first,
            lastName: curr.name.last,
            email: curr.email,
            picUrl: curr.picture.large,
          };
        }); // check it
        // "next" is for loop what was in the previous example
        this.peopleArrObserve.next(this.peopleArr);
      });
  }
}
