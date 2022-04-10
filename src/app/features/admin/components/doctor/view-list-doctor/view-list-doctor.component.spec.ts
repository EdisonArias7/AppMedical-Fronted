import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListDoctorComponent } from './view-list-doctor.component';

describe('ViewListDoctorComponent', () => {
  let component: ViewListDoctorComponent;
  let fixture: ComponentFixture<ViewListDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
