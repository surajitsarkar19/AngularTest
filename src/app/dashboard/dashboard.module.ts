import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatCardModule} from '@angular/material/card';

import {DashboardComponent} from "./dashboard.component"
import { EventComponent } from './event/event.component';
import { EventViewComponent } from './event-view/event-view.component'

@NgModule({
  declarations: [
    DashboardComponent,
    EventViewComponent,
    EventComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule
  ]
})
export class DashboardModule { }
