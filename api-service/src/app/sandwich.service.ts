import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SandwichService {
  private url = 'https://randomuser.me/api/?results=1';
  private orderSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }


  submitOrder(order: any) {
    this.http.get(this.url, order).subscribe((response) => {
      console.log('====================================');
      console.log(response);
      console.log('====================================');
    })
  }

  getOrderSubject() {
    return this.orderSubject.asObservable();
  }

  updateListeners(msg: any) {
    this.orderSubject.next(msg);
  }
}
