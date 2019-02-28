import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

import { shareReplay } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}
  private loginUrl= 'http://localhost:3000/auth/v1/';

  authenticateUser(user) {
    const username = user.username;
    const password = user.password;
    return this.http.post<any>(this.loginUrl, {username, password})
    .pipe(map ((response: any) => {
      return response;
    })
  )
  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);
  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  //  isUserAuthenticated(token): Promise<boolean> {
  //   const auth_token = this.getBearerToken();
  //   const reqHeader = new HttpHeaders({
  //     'Authorization': 'Bearer ' + localStorage.getItem('bearerToken')
  //  });
  //   return this.http.post(this.loginUrl + 'isAuthenticated', {headers: reqHeader})
  //   .toPromise().then(
  //     res => {
  //       return true;
  //     })
  //   .catch((err: any) => {
  //     return false;
  //  });
  //  }
}
