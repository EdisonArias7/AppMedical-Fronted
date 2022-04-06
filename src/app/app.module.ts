import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenubarModule} from 'primeng/menubar';
import { ButtonModule } from "primeng/button"; // <----
import { PasswordModule } from "primeng/password";
import { TableModule } from "primeng/table";
import { ChipsModule } from 'primeng/chips';


import { HomeComponent } from './features/home/components/home/home.component';
import { CarouselComponent } from './features/home/components/carousel/carousel.component';
import { CarouselModule} from 'primeng/carousel';
import { PatientComponent } from './features/admin/components/patient-g/patient/patient.component';
import { ModifyPatientComponent } from './features/admin/components/patient-g/modify-patient/modify-patient.component';
import { ViewListPatientComponent } from './features/admin/components/patient-g/view-list-patient/view-list-patient.component';
import { AddAppointmentComponent } from './features/admin/components/appoinment/add-appointment/add-appointment.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    PatientComponent,
    ModifyPatientComponent,
    ViewListPatientComponent,
    AddAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    TableModule,
    PasswordModule,
    ChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
