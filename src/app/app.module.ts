import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comp/header/header.component';
import { ProfileComponent } from './comp/profile/profile.component';
import { EmployeedetailsComponent } from './comp/employeedetails/employeedetails.component';
import { LoginComponent } from './comp/login/login.component';
import { RegisterComponent } from './comp/register/register.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavmenuComponent } from './comp/navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    EmployeedetailsComponent,
    LoginComponent,
    RegisterComponent,
    NavmenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
