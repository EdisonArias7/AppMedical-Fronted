import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../../../../services/patient.service';
import { Patient } from '../../patient-g/interfaces/patient.interface';
import { DoctorService } from '../../../../../services/doctor.service';
import { Doctor } from '../../doctor/interfaces/doctor.interface';
import { AppointmentService } from '../../../../../services/appointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.scss'],
})
export class AddAppointmentComponent implements OnInit {
  rangeDates: Date[] = [];
  minDate = new Date();
  minDate2 = new Date(); 
  maxDate: Date = new Date();
  

  form_appointment: FormGroup;
  patientList: Patient[] = [];
  doctorList: Doctor[] = [];

  invalidDates: Array<Date> = [];
  constructor(private patientService: PatientService,
    private doctorService: DoctorService,
    private appointmentService: AppointmentService,
    private routes: Router,
    private fb: FormBuilder) {
      this.form_appointment = new FormGroup({
        id_appointment: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+$/)]),
        hora_appointment: new FormControl('', [Validators.required]),
        fecha_appointment: new FormControl('', [Validators.required]),
        id_patient: new FormControl('', [Validators.required]),
        id_doctor: new FormControl('', [Validators.required]),
        consultorio_appointment: new FormControl('', [Validators.required]),
      });
    }

  ngOnInit() {

    var current_date = new Date().toISOString().split('T')[0];
    var time = new Date().toLocaleTimeString();

    this.minDate = new Date(current_date);
    this.minDate2 = new Date(time);

    document
      .getElementsByName('appo_date')[0]
      .setAttribute('mindate', current_date);
    
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];

    this.patientService.getAllPatients()
      .subscribe((resp) => {
        this.patientList = resp.patients;
      }, (error) => {
        
      })

      this.doctorService.getAllDoctors()
      .subscribe((resp) => {
        this.doctorList = resp.doctors;
      }, (error) => {
        
      })
  }

  registro() {
    if (this.form_appointment.invalid) {
      this.form_appointment.markAllAsTouched();
      return;
    }
    console.log(this.form_appointment.value);
    const data = this.form_appointment.value;

    setTimeout(() => {
      
      const body = {
        id_appointment: this.form_appointment.get('id_appointment').value,
        hora_appointment: this.form_appointment.get('hora_appointment').value.toLocaleTimeString(),
        fecha_appointment: this.form_appointment.get('fecha_appointment').value.toISOString().split('T')[0],
        id_patient: this.form_appointment.get('id_patient').value.id_patient,
        id_doctor: this.form_appointment.get('id_doctor').value.id_doctor,
        consultorio_appointment: this.form_appointment.get('consultorio_appointment').value
      };

      this.appointmentService.registerAppointment(body)
        .subscribe((resp) => {
          console.log(resp);
        });
      this.form_appointment.reset();
      this.routes.navigate(['view-appointments']);
    }, 500);

  }

 
}
