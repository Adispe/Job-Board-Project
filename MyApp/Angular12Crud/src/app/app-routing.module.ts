import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobAdvertisementDetailsComponent } from './components/job-advertisement-details/job-advertisement-details.component';
import { JobAdvertisementsListComponent } from './components/job-advertisements-list/job-advertisements-list.component';
import { AddJobAdvertisementComponent } from './components/add-job-advertisement/add-job-advertisement.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import {
  AuthInterceptor,
  authInterceptorProviders,
} from './helpers/auth.interceptor';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: '', redirectTo: 'job_advertisement', pathMatch: 'full' },
  { path: 'job_advertisement', component: JobAdvertisementsListComponent },
  {
    path: 'job_advertisement/:id',
    component: JobAdvertisementDetailsComponent,
  },
  { path: 'add', component: AddJobAdvertisementComponent },
  { path: 'user', component: AddUserComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'apply/:id', component: JobApplicationComponent },
];

@NgModule({
  imports: [
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [authInterceptorProviders],
})
export class AppRoutingModule {}
