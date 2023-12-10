import { Injectable } from '@angular/core';
import { results } from 'src/data/people';
import { Person } from 'src/types/Person';
import { PersonFromAPI } from 'src/types/PersonFromAPI';

@Injectable({
  providedIn: 'root',
})
export class PeopleInfoService {
  theArr: Person[] = [];
  listenerArr: Function[] = [];
  url = 'https://randomuser.me/api/?results=50';

  constructor() {}

  getAllPeopleDataStatic() {
    return results.map((p) => {
      return {
        firstName: p.name.first,
        lastName: p.name.last,
        email: p.email,
        picUrl: p.picture.large,
      };
    });
  }

  getAllPeopleDataFromWeb() {}

  getMyGalleryData() {
    fetch(this.url)
      .then((dataFromApi) => {
        return dataFromApi.json();
      })
      .then((dataAsObj) => {
        this.theArr = dataAsObj.results.map((p: PersonFromAPI): Person => {
          return {
            firstName: p.name.first,
            lastName: p.name.last,
            email: p.email,
            picUrl: p.picture.large,
          };
        });
        for (const curr of this.listenerArr) {
          curr(this.theArr);
        }
      })
      .catch(() => {});
  }

  registerToDataUpdates(func: Function) {
    this.listenerArr.push(func);
  }
}
