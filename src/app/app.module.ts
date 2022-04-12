import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button'; // <----
import { PasswordModule } from 'primeng/password';
import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { GalleriaModule } from 'primeng/galleria';
import {ImageModule} from 'primeng/image';

import { HomeComponent } from './features/home/components/home/home.component';
import { CarouselComponent } from './features/home/components/carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { PatientComponent } from './features/admin/components/patient-g/patient/patient.component';
import { ModifyPatientComponent } from './features/admin/components/patient-g/modify-patient/modify-patient.component';
import { ViewListPatientComponent } from './features/admin/components/patient-g/view-list-patient/view-list-patient.component';
import { AddAppointmentComponent } from './features/admin/components/appoinment/add-appointment/add-appointment.component';
import { AddDoctorComponent } from './features/admin/components/doctor/add-doctor/add-doctor.component';
import { ModifyDoctorComponent } from './features/admin/components/doctor/modify-doctor/modify-doctor.component';
import { ViewListDoctorComponent } from './features/admin/components/doctor/view-list-doctor/view-list-doctor.component';
import { ModifyAppointmentComponent } from './features/admin/components/appoinment/modify-appointment/modify-appointment.component';
import { ViewListAppointmentComponent } from './features/admin/components/appoinment/view-list-appointment/view-list-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    PatientComponent,
    ModifyPatientComponent,
    ViewListPatientComponent,
    AddAppointmentComponent,
    AddDoctorComponent,
    ModifyDoctorComponent,
    ViewListDoctorComponent,
    ModifyAppointmentComponent,
    ViewListAppointmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    TableModule,
    PasswordModule,
    ChipsModule,
    CalendarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropdownModule,
    MessageModule,
    MessagesModule,
    GalleriaModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
