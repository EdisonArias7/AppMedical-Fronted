import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppointmentComponent } from './features/admin/components/appoinment/add-appointment/add-appointment.component';
import { AddDoctorComponent } from './features/admin/components/doctor/add-doctor/add-doctor.component';
import { ModifyDoctorComponent } from './features/admin/components/doctor/modify-doctor/modify-doctor.component';
import { ViewListDoctorComponent } from './features/admin/components/doctor/view-list-doctor/view-list-doctor.component';
import { ModifyPatientComponent } from './features/admin/components/patient-g/modify-patient/modify-patient.component';
import { PatientComponent } from './features/admin/components/patient-g/patient/patient.component';
import { ViewListPatientComponent } from './features/admin/components/patient-g/view-list-patient/view-list-patient.component';
import { HomeComponent } from './features/home/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'add-patient', component: PatientComponent },
      { path: 'add-doctor', component: AddDoctorComponent },
      { path: 'add-appointment', component: AddAppointmentComponent },
      { path: 'view-patients', component: ViewListPatientComponent },
      { path: 'modify-patients', component: ModifyPatientComponent },
      { path: 'view-doctors', component: ViewListDoctorComponent },
      { path: 'modify-doctors', component: ModifyDoctorComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
