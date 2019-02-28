import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = new FormControl();
  password = new FormControl();

  submitMessage: string;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  loginSubmit() {
    const user = {
      'username' : this.username.value,
      'password' : this.password.value
     
    };
    //this.router.navigateByUrl('dashboard');
    console.log(this.username.value);
      this.authenticationService.authenticateUser( user ).subscribe(
        (res: any) => {
          this.authenticationService.setBearerToken(res.token);
          this.submitMessage = '';
          this.router.navigateByUrl('dashboard');
        }, err => {
          if (err.status === 403) {
            this.submitMessage = 'Unauthorized';
          }else {
          this.submitMessage = err.message;
          }
        }

      );
    }
}
