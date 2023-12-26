import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SandwichService {
  private url = 'https://cyberstars.onrender.com/qa-exercises/new-customer-registers/json';
  private orderSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }


  submitOrder(order: any) {
    console.log("the order before submit", order);

    this.http.post(this.url, order).subscribe((response) => {
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
