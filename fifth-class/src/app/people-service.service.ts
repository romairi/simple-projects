import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs';
import { DataFromPeopleApi, Person } from 'src/Person';
import { convertPersonFromApiToPerson } from '../Person';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  private url = 'https://randomuser.me/api/?results=50';
  private favorites = new Set<string>();
  private peopleSubject: ReplaySubject<Map<string, Person>> = new ReplaySubject(
    1
  );
  peopleMap: Map<string, Person> = new Map<string, Person>();

  constructor(private http: HttpClient) {}

  initPeopleService(): void {
    this.http.get<DataFromPeopleApi>(this.url).subscribe((data) => {
      data.results.forEach((curr) => {
        const newPerson = convertPersonFromApiToPerson(curr);
        this.peopleMap.set(newPerson.uuid, newPerson);
      });
      this.peopleSubject.next(this.peopleMap);
    });
  }

  addToFavorites(uuid: string) {
    this.favorites.add(uuid);
  }

  removeFromFavorites(uuid: string) {
    this.favorites.delete(uuid);
  }

  isFavorite(uuid: string): boolean {
    return this.favorites.has(uuid);
  }

  registerToPeopleSubject() {
    return this.peopleSubject;
  }
}
