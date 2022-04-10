import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../../../services/doctor.service';
import { Doctor } from '../interfaces/doctor.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-list-doctor',
  templateUrl: './view-list-doctor.component.html',
  styleUrls: ['./view-list-doctor.component.scss'],
})
export class ViewListDoctorComponent implements AfterViewInit {

  doctors: Doctor[];
  constructor(private doctorService: DoctorService,
    private routes: Router) {}

  async ngAfterViewInit(): Promise<any> {
    const result = await this.doctorService.getAll();
    this.doctors = await result.doctors;
    data => (this.doctors = data);
  }

  getDoctorById(row: any): string {
    const id = row._id;
    return id;
  }

  async delete(row: any): Promise<any> {
    try {
      const deleteUser = await this.doctorService.deleteDoctor(row._id);
      const newList = await this.doctorService.getDoctor();
      for (let i = 0; i < this.doctors.length; i++) {
        if (this.doctors[i]['_id'] === row._id) {
          this.doctors.splice(i, 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  modify(row: any) {
    this.routes.navigate(['modify-doctors'],{queryParams:{id_patient:this.getDoctorById(row)}});
  }
}
