import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupusersdataComponent } from './misc/signupusersdata/signupusersdata.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { HomeComponent } from './HostelOwnerDashboard/home/home.component';
import { UserDashboardComponent } from './RegularUser/user-dashboard/user-dashboard.component';
import { AddHostelComponent } from './HostelOwnerDashboard/add-hostel/add-hostel.component';
import { ManageHostelComponent } from './HostelOwnerDashboard/manage-hostel/manage-hostel.component';
import { HostelDetailsComponent } from './HostelOwnerDashboard/hostel-details/hostel-details.component';
import { SearchPersonComponent } from './HostelOwnerDashboard/search-person/search-person.component';
import { SendNotificationComponent } from './HostelOwnerDashboard/send-notification/send-notification.component';
import { ViewComplaintsComponent } from './HostelOwnerDashboard/view-complaints/view-complaints.component';
import { BillingReportDetailsComponent } from './HostelOwnerDashboard/billing-report-details/billing-report-details.component';
import { SidenavComponent } from './HostelOwnerDashboard/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    SignupusersdataComponent,
    DateFormatPipe,
    HomeComponent,
    UserDashboardComponent,
    AddHostelComponent,
    ManageHostelComponent,
    HostelDetailsComponent,
    SearchPersonComponent,
    SendNotificationComponent,
    ViewComplaintsComponent,
    BillingReportDetailsComponent,
    SidenavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
