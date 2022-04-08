import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  form_doctor: FormGroup;
  SERVER_URL = 'http://localhost:3000/doctors';

  constructor(private fb: FormBuilder, private doctorService: DoctorService) { 
    this.form_doctor = new FormGroup({
      id_doctor: new FormControl('', [Validators.required]),
      name_doctor: new FormControl('', [Validators.required]),
      lastname_doctor: new FormControl('', [Validators.required]),
      cedula_doctor: new FormControl('', [Validators.required]),
      telefono_doctor: new FormControl('', [Validators.required]),
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
  }

}
