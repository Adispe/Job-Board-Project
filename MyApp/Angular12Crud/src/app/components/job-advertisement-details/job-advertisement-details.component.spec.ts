import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertisementDetailsComponent } from './job-advertisement-details.component';

describe('TutorialDetailsComponent', () => {
  let component: JobAdvertisementDetailsComponent;
  let fixture: ComponentFixture<JobAdvertisementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobAdvertisementDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertisementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
