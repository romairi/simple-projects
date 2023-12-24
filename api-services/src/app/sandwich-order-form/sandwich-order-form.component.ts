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
      isChickenBreast: new FormControl(false),
      isPastrami: new FormControl(false),
      isCheese: new FormControl(false),

      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^05\d{1}-\d{7}$/),
      ]),

      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });

    this.sandwichForm.setValue({
      mainItem: 'Pastrami',
      extras: ['Tomatoes', 'Olives', 'Lettuce', 'Pesto', 'Cucumber'],
      email: 'roma@gmail.com',
      phone: '052-3412457',
      fullName: 'john bob',
      address: 'hama 8, tel-aviv',
    });
  }

  onSubmit() {
    console.log(this.sandwichForm.value);
  }
}
