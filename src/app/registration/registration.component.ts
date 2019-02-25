import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor() { }
  ngOnInit() {}

  firstName = new FormControl();
  lastName = new FormControl();
  email = new FormControl();
  password = new FormControl();
  confirmPassword = new FormControl();
  dob = new FormControl();
  gender = new FormControl();
  address = new FormControl();
  pickupAddress = new FormControl();
  matcher = new MyErrorStateMatcher();

  onClick(event : any){
    console.log(event);
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}