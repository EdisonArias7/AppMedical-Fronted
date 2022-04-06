import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListPatientComponent } from './view-list-patient.component';

describe('ViewListPatientComponent', () => {
  let component: ViewListPatientComponent;
  let fixture: ComponentFixture<ViewListPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
