import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './parent/about-us/about-us.component';
import { ContactUsComponent } from './parent/contact-us/contact-us.component';
import { DashboardComponent } from './parent/dashboard/dashboard.component';
import { LoginComponent } from './parent/login/login.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'Login', component: LoginComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
