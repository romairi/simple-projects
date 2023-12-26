import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form-status-demo',
  templateUrl: './form-status-demo.component.html',
  styleUrls: ['./form-status-demo.component.css']
})
export class FormStatusDemoComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  fullName = new FormControl('john', [Validators.required, Validators.minLength(5)]);
  email = new FormControl('@', [Validators.required, Validators.minLength(3)]);

  subscriptionToFormValueChanges: Subscription | null = null;



  // Changed  - the value of the form/control has changed from its INITIAL value
  //            a control is considered changed if its value is different from its 
  //            initial value(when the form was created or last reset)

  // Pristine  - the neg of the value of Dirty
  // Dirty - a control/form is considerd dirty if the user has interacted with it.

  // Valid - a control/form is condidered valid if it conforms to all our defined validators
  // Invalid - the neg of the value of Valid

  constructor() {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: this.fullName,
      eml: this.email
    });

    this.subscriptionToFormValueChanges = this.myForm.valueChanges.subscribe((val) => {
      console.log("form values are now:", val);
    });


    this.fullName.valueChanges.subscribe((v) => {
      console.log('====================================');
      console.log("fullName is now", v);
      console.log('====================================');
    });

    // this.myForm.statusChanges.subscribe((val) => {
    //   console.log("form values are now:", val);
    // });


    // this.fullName.statusChanges.subscribe((v) => {
    //   console.log('====================================');
    //   console.log("fullName is now", v);
    //   console.log('====================================');
    // });

  }


  resetMyForm() {
    // erases all values
    this.myForm.reset();
  }

  setMyForm() {
    // setting our form values to certain values
    this.myForm.patchValue({
      name: 'john',
      eml: '@'
    })
  }


  //=======================================
  stopListeningToFormValueChanges() {
    this.subscriptionToFormValueChanges?.unsubscribe();
  }
  //=======================================


  mySubmit() {
    console.log("this.myForm.errors", this.myForm.errors);
    this.stopListeningToFormValueChanges();
  }

}
