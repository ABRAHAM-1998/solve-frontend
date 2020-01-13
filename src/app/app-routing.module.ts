import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UiMainComponent } from './ui-main/ui-main.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeComponent } from './home/home.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { PagenotefoundComponent } from './pagenotefound/pagenotefound.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './admin/users/users.component';
import { ComplaintComponent } from './admin/complaint/complaint.component';
import { PriorityComponent } from './admin/priority/priority.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent},
      { path:'mainui', component: UiMainComponent},
      { path:'new' , component:TestcomponentComponent},
      {path: 'chaton', component: ChatboxComponent},
    ]
  },

  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: 'users', component: UsersComponent },
      { path: 'complaints', component: ComplaintComponent },
      { path: 'priority', component: PriorityComponent }
    ]
  },

  {path: '**', component:PagenotefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
