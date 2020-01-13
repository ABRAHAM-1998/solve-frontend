import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UiMainComponent } from './ui-main/ui-main.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { FormsModule } from '@angular/forms';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { PagenotefoundComponent } from './pagenotefound/pagenotefound.component';
import { ComplaintboxComponent } from './complaintbox/complaintbox.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { ComplaintstatusComponent } from './complaintstatus/complaintstatus.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { ComplaintComponent } from './admin/complaint/complaint.component';
import { PriorityComponent } from './admin/priority/priority.component';
import { AddNewPriorityComponent } from './admin/priority/add-new-priority/add-new-priority.component';
import { UsercomplaintsComponent } from './admin/usercomplaints/usercomplaints.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomepageComponent,
    SignupComponent,
    LoginComponent,
    UiMainComponent,
    ChatboxComponent,
    TestcomponentComponent,
    PagenotefoundComponent,
    ComplaintboxComponent,
    ComplaintstatusComponent,
    AdminDashboardComponent,
    UsersComponent,
    ComplaintComponent,
    PriorityComponent,
    AddNewPriorityComponent,
    UsercomplaintsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [
    ChatboxComponent,
    ComplaintstatusComponent,
    ComplaintboxComponent,
    AddNewPriorityComponent,
    UsercomplaintsComponent,
    ProfileComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
