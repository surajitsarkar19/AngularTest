import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  EventsService,
  AuthenticationService
} from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    EventsService,
    AuthenticationService
  ],
  declarations: []
})
export class CoreModule { }
