import { Component, OnInit } from '@angular/core';
import { Job_advertisement } from 'src/app/models/job-advertisement.model';
import { Company } from 'src/app/models/company.model';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
@Component({
  selector: 'app-job-advertisements-list-list',
  templateUrl: './job-advertisements-list.component.html',
  styleUrls: ['./job-advertisements-list.component.scss'],
})
export class JobAdvertisementsListComponent implements OnInit {
  isLoggedIn = false;

  job_advertisements?: Job_advertisement[];
  companies?: Company[];
  currentJob: Job_advertisement = {};
  currentIndex = -1;
  name = '';
  isAdmin = false;
  isModerator = false;
  content?: string;

  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private companyService: CompanyService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.retrieveJobAdvertisements();
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      this.userService.getAdminBoard().subscribe(
        (data) => {
          this.isAdmin = true;
          this.content = data;
        },
        (err) => {
          this.content = JSON.parse(err.error).message;
        }
      );
    }
  }

  retrieveJobAdvertisements(): void {
    this.jobAdvertisementService.getAll().subscribe(
      (data) => {
        this.job_advertisements = data;
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

  refreshList(): void {
    this.retrieveJobAdvertisements();
    this.currentJob = {};
    this.currentIndex = -1;
  }

  setActiveJobAdvertisement(
    job_advertisement: Job_advertisement,
    index: number
  ): void {
    this.currentJob = job_advertisement;
    this.currentIndex = index;
  }

  removeAllJobAdvertisements(): void {
    this.jobAdvertisementService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchTitle(): void {
    this.currentJob = {};
    this.currentIndex = -1;

    this.jobAdvertisementService.findByTitle(this.name).subscribe(
      (data) => {
        this.job_advertisements = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  deleteJobAdvertisement(): void {
    const currentId = this.currentJob.id;
    this.jobAdvertisementService.delete(this.currentJob.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/job_advertisement/' + currentId], {
          queryParams: { deleted: 'true' },
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
  applyJobAdvertisement(id?: any): void {
    const currentId = this.currentJob.id;
    this.router.navigate(['/apply/' + currentId]);
  }
}
