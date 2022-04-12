import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { PatientService } from '../../../../../services/patient.service';
import { Patient } from '../interfaces/patient.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styleUrls: ['./modify-patient.component.scss'],
})
export class ModifyPatientComponent implements OnInit {
  form_patient: FormGroup;
  SERVER_URL = 'http://localhost:3000/api/patient';
  patients: Patient[];
  id_edit: string;

  constructor(
    private patientService: PatientService,
    private fb: FormBuilder,
    private http: HttpClient,
    private actroutes: ActivatedRoute,
    private routes: Router
  ) {
    this.form_patient = new FormGroup({
      id_patient: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
      ]),
      name_patient: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,254}'),
      ]),
      lastname_patient: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]{2,254}'),
      ]),
      sexo_patient: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      telefono_patient: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
      ]),
      direccion_patient: new FormControl('', [Validators.required]),
    });

    this.id_edit = this.actroutes.snapshot.queryParams.id_patient;
    this.getPatient();
  }

  ngOnInit(): void {}

  async cargarInfo() {
    try {
      const result = await this.patientService.getPatient();
      console.log('result', result);
      this.patients = await result.patients;
      console.log(result.patients);
      console.log(this.patients);
    } catch (error) {
      console.log(error);
    }
  }

  async getPatient(): Promise<any> {
    const patient = await this.patientService.getPatientById(this.id_edit);
    this.form_patient.patchValue({ id_patient: patient.patient.id_patient });
    this.form_patient.patchValue({
      name_patient: patient.patient.name_patient,
    });
    this.form_patient.patchValue({
      lastname_patient: patient.patient.lastname_patient,
    });
    this.form_patient.patchValue({
      sexo_patient: patient.patient.sexo_patient,
    });
    this.form_patient.patchValue({
      telefono_patient: patient.patient.telefono_patient,
    });
    this.form_patient.patchValue({
      direccion_patient: patient.patient.direccion_patient,
    });
  }

  async edit(): Promise<any> {
    try {
      setTimeout(async () => {
        console.log('editMethod', this.form_patient.value);
        const editEvent = await this.patientService.editPatient(
          this.id_edit,
          this.form_patient.value
        );
        const newList = await this.patientService.getPatient();
        this.routes.navigate(['view-patients']);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
}
