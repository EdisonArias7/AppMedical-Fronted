import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListAppointmentComponent } from './view-list-appointment.component';

describe('ViewListAppointmentComponent', () => {
  let component: ViewListAppointmentComponent;
  let fixture: ComponentFixture<ViewListAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListAppointmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
