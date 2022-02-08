import { Component, OnInit } from '@angular/core';
import { Job_advertisement } from 'src/app/models/job-advertisement.model';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-job-advertisement',
  templateUrl: './add-job-advertisement.component.html',
  styleUrls: ['./add-job-advertisement.component.scss'],
})
export class AddJobAdvertisementComponent implements OnInit {
  name = new FormControl('');
  companies?: Company[];
  form: any = {
    name: '',
    short_description: '',
    full_description: '',
    localisation: '',
    contract: '',
    company: '',
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  company: Company = {
    id: null,
    name: '',
    workforce: null,
    geographic_location: '',
    description: '',
  };
  job_advertisement: Job_advertisement = {
    id: 1,
    company: '',
    id_user: 0,
    name: '',
    contract: '',
    localisation: '',
    short_description: '',
    full_description: '',
    published: false,
  };
  submitted = false;

  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.retrieveCompanies();
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

  onSubmit(): void {
    const data = {
      id: this.form.id,
      company: this.form.company,
      id_user: this.form.id_user,
      name: this.form.name,
      contract: this.form.contract,
      localisation: this.form.localisation,
      short_description: this.form.short_description,
      full_description: this.form.full_description,
      published: this.form.published,
    };
    this.saveJobAdvertisement(data);
    this.submitted = true;
  }

  saveJobAdvertisement(data: any): void {
    this.jobAdvertisementService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.isSuccessful = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newTutorial(): void {
    this.submitted = false;
    this.job_advertisement = {
      id: 1,
      company: '',
      id_user: 0,
      name: '',
      contract: '',
      localisation: '',
      short_description: '',
      full_description: '',
      published: false,
    };
  }
}
