import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../event';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import { HttpResponse } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  events: Event[]; // = [{'id': 0, 'title': '', 'text': '', 'state': ''}];  
  eventsUrl='';
  constructor(private http: HttpClient, private authService: AuthenticationService){}

  getEvents(): Observable<Event[]> {
    const auth_token = this.authService.getBearerToken;
    const reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('bearerToken')
   });
    return this.http.get<Event[]>(this.eventsUrl, {headers: reqHeader})
    .pipe(map((data: Event[]) => {      
       return data;
      
    }))   
   
  }
}
