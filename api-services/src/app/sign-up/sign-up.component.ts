import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup = new FormGroup({});


  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
        userName: new FormControl('', [Validators.required ,Validators.minLength(3)]),
        email: new FormControl('', [Validators.required ,Validators.minLength(3)]),
        password: new FormControl('', [Validators.required ,Validators.minLength(8)]),
    })
  }

  onSubmit() {
    console.log()
  }

}
