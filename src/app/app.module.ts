import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './parent/dashboard/dashboard.component';
import { AboutUsComponent } from './parent/about-us/about-us.component';
import { ContactUsComponent } from './parent/contact-us/contact-us.component';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginComponent } from './parent/login/login.component';
import { FormsModule } from '@angular/forms';
import { ParentModule } from './parent/parent.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DashboardComponent, AboutUsComponent, ContactUsComponent]
})
export class AppModule { }
