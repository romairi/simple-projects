import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-demo',
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.css']
})
export class FormArrayDemoComponent implements OnInit {
  myForm: FormGroup;
  extrasOptionsArr = ['Tomatoes', 'Olives', 'Lettuce', 'Pesto', 'Cucumbers'];

  arr = new Array();

  extrasControlMap: { [key: string]: FormControl } = {};

  constructor() {
    this.myForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      extras: new FormArray([]),
    });

    this.extrasOptionsArr.forEach((curr, index) => {
      let newControl = new FormControl(false);
      (this.myForm.get('extras') as FormArray).push(newControl);

      this.extrasControlMap[curr] = newControl;
    });

    this.arr = Object.keys(this.extrasControlMap);
  }

  onSubmit() {
    this.extrasControlMap['Lettuce'].setValue(true);

    console.log('====================================');
    console.log(this.extrasControlMap['Tomatoes'].value);
    console.log('====================================');
  }

  castToFormControl(control: FormControl): FormControl {
    return control as FormControl;
  }
}
