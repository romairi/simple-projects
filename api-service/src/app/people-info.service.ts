import { Injectable } from '@angular/core';
import { results } from 'src/data/people';
import { Person } from 'src/types/Person';
import { PersonFromAPI } from 'src/types/PersonFromAPI';

@Injectable({
  providedIn: 'root'
})
export class PeopleInfoService {

  theArr: Person[] = [];
  listenersArr: Function[] = [];

  constructor() { }

  getAllPeopleDataStatic() {
    return results.map((p) => {
      return {
        firstName: p.name.first,
        lastName: p.name.last,
        email: p.email,
        picUrl: p.picture.large
      }
    });
  }


  getAllPeopleDataFromWeb() {

  }

  //====================================================================
  url = "https://randomuser.me/api/?results=50";

  getMyGalleryData() {
    fetch(this.url)
      .then((dataFromAPI) => { return dataFromAPI.json() })
      .then((dataAsObj) => {
        console.log(dataAsObj.results[0]);
        this.theArr = dataAsObj.results.map((p: PersonFromAPI): Person => {
          return {
            firstName: p.name.first,
            lastName: p.name.last,
            email: p.email,
            picUrl: p.picture.large
          }
        });
        for (const curr of this.listenersArr) {
          curr(this.theArr);
        }
      })
  }


  registerToDataUpdates(func: Function) {
    this.listenersArr.push(func);
  }
}
