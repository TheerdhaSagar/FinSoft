import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeavemanagementComponent } from './leavemanagement/leavemanagement.component';
import { EssportalComponent } from './essportal/essportal.component';
import { LoginComponent } from './login/login.component';
import { TimesheetsComponent } from './timesheets/timesheets.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeavemanagementComponent,
    EssportalComponent,
    LoginComponent,
    TimesheetsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'leave', component: LeavemanagementComponent},
      {path: 'ess', component: EssportalComponent},
      {path: 'timesheets', component: TimesheetsComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
