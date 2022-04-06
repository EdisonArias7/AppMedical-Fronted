import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './features/admin/components/appoinment/add-appointment/add-appointment.component';
import { AddDoctorComponent } from './features/admin/components/doctor/add-doctor/add-doctor.component';
import { PatientComponent } from './features/admin/components/patient-g/patient/patient.component';
import { HomeComponent } from './features/home/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'add-patient', component: PatientComponent },
      { path: 'add-doctor', component: AddDoctorComponent },
      { path: 'add-appointment', component: AddAppointmentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
