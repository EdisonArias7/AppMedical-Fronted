import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { AppointmentService } from '../../../../../services/appointment.service';
import { Appointment } from '../interfaces/appointment.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../../../../services/patient.service';
import { Patient } from '../../patient-g/interfaces/patient.interface';
import { DoctorService } from '../../../../../services/doctor.service';
import { Doctor } from '../../doctor/interfaces/doctor.interface';

@Component({
  selector: 'app-modify-appointment',
  templateUrl: './modify-appointment.component.html',
  styleUrls: ['./modify-appointment.component.scss'],
})
export class ModifyAppointmentComponent implements OnInit {
  form_appointment: FormGroup;
  SERVER_URL = 'http://localhost:3000/api/appointment';
  appointments: Appointment[];
  id_edit: string;
  angeDates: Date[] = [];
  minDate: Date = new Date();
  maxDate: Date = new Date();
  invalidDates: Array<Date> = [];
  patientList: Patient[] = [];
  doctorList: Doctor[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private fb: FormBuilder,
    private http: HttpClient,
    private actroutes: ActivatedRoute,
    private routes: Router
  ) {
    this.form_appointment = new FormGroup({
      id_appointment: new FormControl('', [Validators.required]),
      hora_appointment: new FormControl('', [Validators.required]),
      fecha_appointment: new FormControl('', [Validators.required]),
      id_patient: new FormControl('', [Validators.required]),
      id_doctor: new FormControl('', [Validators.required]),
      consultorio_appointment: new FormControl('', [Validators.required]),
    });
    this.id_edit = this.actroutes.snapshot.queryParams.id_appointment;
    this.getAppointment();
  }

  ngOnInit(): void {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];

    this.patientService.getAllPatients().subscribe(
      (resp) => {
        this.patientList = resp.patients;
      },
      (error) => {}
    );

    this.doctorService.getAllDoctors().subscribe(
      (resp) => {
        this.doctorList = resp.doctors;
      },
      (error) => {}
    );
  }

  
  async cargarInfo() {

    try {
      const result = await this.appointmentService.getAppointment();
      console.log('result', result);
      this.appointments = await result.appointments;
      console.log(result.appointments);
      
    } catch (error) {
      console.log(error);
    }
  }

  async getAppointment():Promise<any>{
    const appointment = await this.appointmentService.getAppointmeById(this.id_edit);
    this.form_appointment.patchValue({id_appointment:appointment.appointment.id_appointment});
    this.form_appointment.patchValue({hora_appointment:appointment.appointment.hora_appointment.hora_appointment});
    this.form_appointment.patchValue({fecha_appointment:appointment.appointment.fecha_appointment.fecha_appointment});
    this.form_appointment.patchValue({id_patient:appointment.appointment.id_patient});
    this.form_appointment.patchValue({id_doctor:appointment.appointment.id_doctor});
    this.form_appointment.patchValue({consultorio_appointment:appointment.appointment.consultorio_appointment});
  }

  async edit():Promise<any> {
    try{
      setTimeout(async () => {
        console.log('editMethod', this.form_appointment.value);
        
        const body = {
          id_appointment: this.form_appointment.get('id_appointment').value,
          hora_appointment: this.form_appointment.get('hora_appointment').value.toLocaleTimeString(),
          fecha_appointment: this.form_appointment.get('fecha_appointment').value.toISOString().split('T')[0],
          id_patient: this.form_appointment.get('id_patient').value.id_patient,
          id_doctor: this.form_appointment.get('id_doctor').value.id_doctor,
          consultorio_appointment: this.form_appointment.get('consultorio_appointment').value
        };

        const editEvent = await this.appointmentService.editAppointment(this.id_edit,body);
        const newList = await this.appointmentService.getAppointment();
        this.routes.navigate(['view-appointments']);
      }, 500);
    }catch (error) {
      console.log(error)
    }
  }
}
