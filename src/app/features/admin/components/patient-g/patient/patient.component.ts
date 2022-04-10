import { HttpParams } from '@angular/common/http';
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
  SERVER_URL = 'http://localhost:3000/api/patient';

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

    setTimeout(() => {
      
      const body = {
        id_patient: this.form_patient.get('id_patient').value,
        name_patient: this.form_patient.get('name_patient').value,
        lastname_patient: this.form_patient.get('lastname_patient').value,
        sexo_patient: this.form_patient.get('sexo_patient').value,
        telefono_patient: this.form_patient.get('telefono_patient').value,
        direccion_patient: this.form_patient.get('direccion_patient').value
      };

      this.patientService.registerPatient(body)
        .subscribe((resp) => {
          console.log(resp);
        });
      this.form_patient.reset();
    }, 1000);
  }
}
