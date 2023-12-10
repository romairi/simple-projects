import { Injectable } from '@angular/core';
import { results } from 'src/data/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleInfoService {
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

  getAllPeopleDataFromWeb() {
    
  }
}
