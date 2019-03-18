import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EventCardComponent } from './event-card/event-card.component';
import { RegisterEventComponent } from './register-event/register-event.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  {path : 'registration', component: RegistrationComponent},
  {path : 'event-list', component: EventCardComponent},
  {path : 'event-registration', component: RegisterEventComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }