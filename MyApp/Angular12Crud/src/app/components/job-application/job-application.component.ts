import { Component, OnInit } from '@angular/core';
import { Job_advertisement } from 'src/app/models/job-advertisement.model';
import { Job_application } from 'src/app/models/job-application.model';
import { JobApplicationService } from 'src/app/services/job-application.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { FormControl } from '@angular/forms';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.scss'],
})
export class JobApplicationComponent implements OnInit {
  name = new FormControl('');
  companies?: Company[];
  user: User = {} as User;

  company: Company = {
    id: null,
    name: '',
    workforce: null,
    geographic_location: '',
    description: '',
  };
  currentJob: Job_advertisement = {};
  job_application: Job_application = {
    id: '0',
    id_jobseeker: 0,
    id_hr: 0,
    id_advertisement: this.currentJob.id,
    jobseeker_messages: 'test1',
    advertiser_messages: 'test2',
    status: 'applied',
    date: '1995-10-04',
    age: 0,
    work_experience: '',
    education: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: 629392545,
  };
  submitted = false;
  job_advertisements?: Job_advertisement[];

  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private jobApplicationService: JobApplicationService,
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private userService: UserService
  ) {}

  isLoggedIn = false;
  isUser = false;
  content?: string;
  userId = 12;

  ngOnInit(): void {
    this.getJobAdvertisement(this.route.snapshot.params.id);
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    // this.getUser(15);
    // if (this.isLoggedIn) {
    //   this.userService.getUserBoard().subscribe(
    //     (data) => {
    //       this.isUser = true;
    //     },
    //     (err) => {
    //       this.content = JSON.parse(err.error).message;
    //     }
    //   );
    // }

    //
    if (this.isLoggedIn) {
      this.userService
        .getUserBoard()
        .pipe(
          tap((data) => (this.isUser = true)),
          switchMap(() => this.userService.findById(15))
        )
        .subscribe((test) => {
          this.isUser = true;
          this.user = test;
          this.job_application.work_experience = this.user.work_experience;
          this.job_application.education = this.user.education;
          this.job_application.first_name = this.user.first_name;
          this.job_application.last_name = this.user.last_name;
          this.job_application.email = this.user.email;
        });
    }
  }
  getJobAdvertisement(id: any): void {
    this.jobAdvertisementService.get(id).subscribe(
      (data) => {
        this.currentJob = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  retrieveCompanies(): void {
    this.companyService.getAll().subscribe(
      (data) => {
        this.companies = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUser(id: any): void {
    this.userService.findById(id).subscribe(
      (data) => {
        this.user = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveJobApplication(): void {
    const data = {
      id: this.job_application.id,
      id_jobseeker: this.job_application.id_jobseeker,
      id_hr: this.job_application.id_hr,
      id_advertisement: this.currentJob.id,
      jobseeker_messages: this.job_application.jobseeker_messages,
      advertiser_messages: this.job_application.advertiser_messages,
      status: this.job_application.status,
      date: this.job_application.date,
      age: this.job_application.age,
      work_experience: this.job_application.work_experience,
      education: this.job_application.education,
      first_name: this.job_application.first_name,
      last_name: this.job_application.last_name,
      email: this.job_application.email,
      phone: this.job_application.phone,
    };

    this.jobApplicationService.create(data).subscribe(
      (response: any) => {
        console.log(response);
        this.submitted = true;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  newJobApplication(): void {
    this.submitted = false;
    this.job_application = {
      id: 0,
      id_jobseeker: 0,
      id_hr: 0,
      id_advertisement: 0,
      jobseeker_messages: '',
      advertiser_messages: '',
      status: '',
      date: '1995-04-10',
      age: 0,
      work_experience: '',
      education: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: 629392545,
    };
  }
}
