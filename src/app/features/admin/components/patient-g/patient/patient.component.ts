import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import {
  PatientService,
} from '../../../../../services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  form_patient: FormGroup;
  SERVER_URL = 'http://localhost:3000/patients';

  constructor(private fb: FormBuilder, private patientService: PatientService) {
    this.form_patient = new FormGroup({
      id_patient: new FormControl('', [Validators.required]),
      name_patient: new FormControl('', [Validators.required]),
      lastname_patient: new FormControl('', [Validators.required]),
      sexo_patient: new FormControl('', [Validators.required]),
      telefono_patient: new FormControl('', [Validators.required]),
      direccion_patient: new FormControl('', [Validators.required]),
    });
    
  }

  ngOnInit(): void {}

  registro() {
    if (this.form_patient.invalid) {
      this.form_patient.markAllAsTouched();
      return;
    }
    console.log(this.form_patient.value);
    const data = this.form_patient.value;
  }
}
