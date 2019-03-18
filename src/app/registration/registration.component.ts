import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  firstName=new FormControl('', [Validators.required]);
  lastName=new FormControl('', [Validators.required]);
  email=new FormControl('', [Validators.required]);
  password=new FormControl('', [Validators.required]);
  confirmPassword=new FormControl('', [Validators.required]);
  gender=new FormControl('', [Validators.required]);
  permanentAddress=new FormControl('', [Validators.required]);
  pickupAddress=new FormControl('', [Validators.required]);

  submitMessage: string;

  constructor(private router: Router) { }
  ngOnInit() {}
 
  doRegistration(){

    const userObject = {
      'firstName': this.firstName.value,
      'lastName': this.lastName.value,
      'email': this.email.value,
      'password': this.password.value,
      'confirmPassword': this.confirmPassword.value,
      'gender' : this.gender.value,
      'permanentAddress' : this.permanentAddress.value,
      'pickupAddress': this.pickupAddress.value
    }
     console.log(userObject);
     this.router.navigateByUrl('dashboard');
 }
  
}
