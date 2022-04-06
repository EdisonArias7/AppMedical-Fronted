import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './features/admin/components/patient-g/patient/patient.component';
import { HomeComponent } from './features/home/components/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [{ path: 'add-patient', component: PatientComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
