import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';

import {
  EventsService,
  AuthenticationService,
  TokenService,
} from './service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    EventsService,
    AuthenticationService,
    TokenService
  ],
  declarations: []
})
export class CoreModule { }
