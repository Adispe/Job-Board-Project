import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAdvertisementsListComponent } from './job-advertisements-list.component';

describe('TutorialsListComponent', () => {
  let component: JobAdvertisementsListComponent;
  let fixture: ComponentFixture<JobAdvertisementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobAdvertisementsListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAdvertisementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
