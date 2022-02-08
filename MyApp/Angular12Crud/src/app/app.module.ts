import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobAdvertisementDetailsComponent } from './components/job-advertisement-details/job-advertisement-details.component';
import { JobAdvertisementsListComponent } from './components/job-advertisements-list/job-advertisements-list.component';
import { AddJobAdvertisementComponent } from './components/add-job-advertisement/add-job-advertisement.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ProfileComponent } from './components/profile/profile.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import {
  AuthInterceptor,
  authInterceptorProviders,
} from './helpers/auth.interceptor';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    JobAdvertisementDetailsComponent,
    JobAdvertisementsListComponent,
    AddJobAdvertisementComponent,
    NavbarComponent,
    AddUserComponent,
    SignInComponent,
    ProfileComponent,
    JobApplicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatAutocompleteModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
