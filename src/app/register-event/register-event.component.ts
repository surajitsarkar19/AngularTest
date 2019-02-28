import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-register-event',
  templateUrl: './register-event.component.html',
  styleUrls: ['./register-event.component.scss']
})
export class RegisterEventComponent implements OnInit {
  eventName = new FormControl();
  eventDesc = new FormControl();
  startTime = new FormControl();
  endTime = new FormControl();
  eventLocation = new FormControl();
  pickupAddress = new FormControl();
  travelDuration = new FormControl();
  //transportType = new FormControl();
  volenteerRequired = new FormControl();
  eventStatus = new FormControl();
  poc = new FormControl();

  constructor() { }

  ngOnInit() {
  }

  eventRegistration(){

  }
}
