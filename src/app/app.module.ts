import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatRadioModule, MatNativeDateModule, MatGridListModule, MatCardModule} from '@angular/material';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventViewComponent } from './event-view/event-view.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegisterEventComponent } from './register-event/register-event.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventComponent } from './event/event.component';
import {HttpClientModule } from '@angular/common/http';
import {AuthenticationService} from '../app/services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EventViewComponent,
    RegistrationComponent,
    RegisterEventComponent,
    EventCardComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
