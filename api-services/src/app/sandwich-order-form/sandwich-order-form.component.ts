import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SandwichService } from '../sandwich.service';

@Component({
  selector: 'app-sandwich-order-form',
  templateUrl: './sandwich-order-form.component.html',
  styleUrls: ['./sandwich-order-form.component.css'],
})
export class SandwichOrderFormComponent implements OnInit {
  sandwichForm: FormGroup = new FormGroup({});
  mainItemOptionsArray = ['Chicken Breast', 'Pastrami', 'Cheese'];
  extrasOptionsArr = ['Tomatoes', 'Olives', 'Lettuce', 'Pesto', 'Cucumber'];

  constructor(private sandwichService: SandwichService) {}

  ngOnInit(): void {
    this.sandwichForm = new FormGroup({
      mainItem: new FormControl('', [Validators.required]),
      // isChickenBreast: new FormControl(false),
      // isPastrami: new FormControl(false),
      // isCheese: new FormControl(false),

      extras: new FormArray([]),

      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^05\d{1}-\d{7}$/),
      ]),
      fullName: new FormControl('', []),
      address: new FormControl('', []),
    });
  }

  onSubmit() {

  }
}
