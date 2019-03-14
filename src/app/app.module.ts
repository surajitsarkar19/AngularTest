import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { EventCardComponent } from './event-card/event-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatNativeDateModule, MatFormFieldModule, MatGridListModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RegistrationComponent } from './registration/registration.component';    
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';

import {CoreModule} from "./core"
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    RegisterEventComponent,
    EventCardComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatCardModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
    
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
