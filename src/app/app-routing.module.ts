import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventViewComponent } from './event-view/event-view.component';
import { RegistrationComponent } from './registration/registration.component';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent,
      children: [
          {path: '', redirectTo: 'view/eventview', pathMatch: 'full'},
          {path: 'view/eventview', component: EventViewComponent},
      ]  
  },
  {path : 'registration', component: RegistrationComponent},

  {path: '', redirectTo: '/login', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
