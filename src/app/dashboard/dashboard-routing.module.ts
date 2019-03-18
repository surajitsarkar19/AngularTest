import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventViewComponent } from './event-view/event-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'view/eventview', pathMatch: 'full'},
  {path: 'view/eventview', component: EventViewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
