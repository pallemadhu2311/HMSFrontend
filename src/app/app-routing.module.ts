import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SignupusersdataComponent } from './misc/signupusersdata/signupusersdata.component';
import { HomeComponent } from './HostelOwnerDashboard/home/home.component';
import { UserDashboardComponent } from './RegularUser/user-dashboard/user-dashboard.component';
import { AddHostelComponent } from './HostelOwnerDashboard/add-hostel/add-hostel.component';
import { BillingReportDetailsComponent } from './HostelOwnerDashboard/billing-report-details/billing-report-details.component';
import { HostelDetailsComponent } from './HostelOwnerDashboard/hostel-details/hostel-details.component';
import { ManageHostelComponent } from './HostelOwnerDashboard/manage-hostel/manage-hostel.component';
import { SearchPersonComponent } from './HostelOwnerDashboard/search-person/search-person.component';
import { SendNotificationComponent } from './HostelOwnerDashboard/send-notification/send-notification.component';
import { ViewComplaintsComponent } from './HostelOwnerDashboard/view-complaints/view-complaints.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'misc/signupusers',
    component: SignupusersdataComponent,
  },
  {
    path: 'hostel/home',
    component: HomeComponent,
  },
  {
    path: 'regular/home',
    component: UserDashboardComponent,
  },
  {
    path: 'hostel/addhotel',
    component: AddHostelComponent,
  },
  {
    path: 'hostel/billingreports',
    component: BillingReportDetailsComponent,
  },
  {
    path: 'hostel/hosteldetails',
    component: HostelDetailsComponent,
  },
  {
    path: 'hostel/managehostel',
    component: ManageHostelComponent,
  },
  {
    path: 'hostel/searchperson',
    component: SearchPersonComponent,
  },
  {
    path: 'hostel/sendnotification',
    component: SendNotificationComponent,
  },
  {
    path: 'hostel/viewcomplaints',
    component: ViewComplaintsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
