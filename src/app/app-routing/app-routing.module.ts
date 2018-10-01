import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Router, Routes } from '@angular/router';
import { ProfileComponent } from '../comp/profile/profile.component';
import { EmployeedetailsComponent } from '../comp/employeedetails/employeedetails.component';
import { LoginComponent } from '../comp/login/login.component';
import { RegisterComponent } from '../comp/register/register.component';

import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Register', component: RegisterComponent
  },
  {
    path: 'Profile', component: ProfileComponent
  },
  {
    path: 'app-home', component: HomeComponent
  },
  { path: '**', redirectTo: 'app-home' }
];

@NgModule({
  imports: [
    //  CommonModule
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]

})
export class AppRoutingModule { }
