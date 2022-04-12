import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { Doctor } from '../interfaces/doctor.interface';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../../../services/doctor.service';

@Component({
  selector: 'app-modify-doctor',
  templateUrl: './modify-doctor.component.html',
  styleUrls: ['./modify-doctor.component.scss'],
})
export class ModifyDoctorComponent implements OnInit {
  form_doctor: FormGroup;
  SERVER_URL = 'http://localhost:3000/api/doctor';
  doctors: Doctor[];
  id_edit: string;

  constructor(
    private doctorService: DoctorService,
    private fb: FormBuilder,
    private http: HttpClient,
    private actroutes: ActivatedRoute,
    private routes: Router
  ) {
    this.form_doctor = new FormGroup({
      id_doctor: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+$/)]),
      name_doctor: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]{2,254}")]),
      lastname_doctor: new FormControl('', [Validators.required,Validators.pattern("[a-zA-Z ]{2,254}")]),
      cedula_doctor: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+$/)]),
      telefono_doctor: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]+$/)]),
      direccion_doctor: new FormControl('', [Validators.required]),
    })

    this.id_edit= this.actroutes.snapshot.queryParams.id_patient;
    this.getDoctor();
  }

  ngOnInit(): void {}

  async cargarInfo() {

    try {
      const result = await this.doctorService.getDoctor();
      console.log('result', result);
      this.doctors = await result.doctors;
      console.log(result.doctors);
      console.log(this.doctors);
    } catch (error) {
      console.log(error);
    }
  }

  async getDoctor():Promise<any>{
    const doctor = await this.doctorService.getDoctorById(this.id_edit);
    this.form_doctor.patchValue({id_doctor:doctor.doctor.id_doctor});
    this.form_doctor.patchValue({name_doctor:doctor.doctor.name_doctor});
    this.form_doctor.patchValue({lastname_doctor:doctor.doctor.lastname_doctor});
    this.form_doctor.patchValue({cedula_doctor:doctor.doctor.cedula_doctor});
    this.form_doctor.patchValue({telefono_doctor:doctor.doctor.telefono_doctor});
    this.form_doctor.patchValue({direccion_doctor:doctor.doctor.direccion_doctor});
  }

  async edit():Promise<any> {
    try{
      setTimeout(async () => {
        console.log('editMethod', this.form_doctor.value);
        const editEvent = await this.doctorService.editDoctor(this.id_edit,this.form_doctor.value);
        const newList = await this.doctorService.getDoctor();
        this.routes.navigate(['view-doctors']);
      }, 500);
    }catch (error) {
      console.log(error)
    }
  }
}
