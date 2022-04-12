import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  DoctorService,
} from '../../../../../services/doctor.service';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  form_doctor: FormGroup;
  SERVER_URL = 'http://localhost:3000/doctor';

  constructor(private fb: FormBuilder, private doctorService: DoctorService, private routes: Router) { 
    this.form_doctor = new FormGroup({
      id_doctor: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+$/)]),
      name_doctor: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]{2,254}")]),
      lastname_doctor: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]{2,254}")]),
      cedula_doctor: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+$/)]),
      telefono_doctor: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+$/)]),
      direccion_doctor: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  registro() {
    if (this.form_doctor.invalid) {
      this.form_doctor.markAllAsTouched();
      return;
    }
    console.log(this.form_doctor.value);
    const data = this.form_doctor.value;

    setTimeout(() => {
      
      const body = {
        id_doctor: this.form_doctor.get('id_doctor').value,
        name_doctor: this.form_doctor.get('name_doctor').value,
        lastname_doctor: this.form_doctor.get('lastname_doctor').value,
        cedula_doctor: this.form_doctor.get('cedula_doctor').value,
        telefono_doctor: this.form_doctor.get('telefono_doctor').value,
        direccion_doctor: this.form_doctor.get('direccion_doctor').value
      };

      this.doctorService.registerDoctor(body)
        .subscribe((resp) => {
          console.log(resp);
        });
      this.form_doctor.reset();
      this.routes.navigate(['view-doctors']);
    }, 500);
  }

}
