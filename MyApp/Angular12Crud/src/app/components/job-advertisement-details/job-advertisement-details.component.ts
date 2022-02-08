import { Component, OnInit } from '@angular/core';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Job_advertisement } from 'src/app/models/job-advertisement.model';

@Component({
  selector: 'app-job-advertisement-details',
  templateUrl: './job-advertisement-details.component.html',
  styleUrls: ['./job-advertisement-details.component.scss'],
})
export class JobAdvertisementDetailsComponent implements OnInit {
  currentJob: Job_advertisement = {
    id: 0,
    company: '',
    id_user: 0,
    name: '',
    contract: '',
    localisation: '',
    short_description: '',
    full_description: '',
    published: false,
  };
  message = '';
  showDeleted = false;
  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.message = '';
    this.getJobAdvertisement(this.route.snapshot.params.id);
    if (this.route.snapshot.queryParamMap.get('deleted')) {
      this.showDeleted = true;
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

  updatePublished(status: boolean): void {
    const data = {
      name: this.currentJob.name,
      short_description: this.currentJob.short_description,
      published: status,
    };

    this.message = '';

    this.jobAdvertisementService.update(this.currentJob.id, data).subscribe(
      (response) => {
        this.currentJob.published = status;
        console.log(response);
        this.message = response.message
          ? response.message
          : 'The status was updated successfully!';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateJobAdvertisement(): void {
    this.message = '';

    this.jobAdvertisementService
      .update(this.currentJob.id, this.currentJob)
      .subscribe(
        (response) => {
          console.log(response);
          this.message = response.message
            ? response.message
            : 'This job advertisement was updated successfully!';
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteJobAdvertisement(): void {
    this.jobAdvertisementService.delete(this.currentJob.id).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/job_advertisement']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
