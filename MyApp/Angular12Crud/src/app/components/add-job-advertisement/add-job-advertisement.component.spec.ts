import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobAdvertisementComponent } from './add-job-advertisement.component';

describe('AddTutorialComponent', () => {
  let component: AddJobAdvertisementComponent;
  let fixture: ComponentFixture<AddJobAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddJobAdvertisementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
