import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PatientService } from '../../../../../services/patient.service';
import { Patient } from '../interfaces/patient.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-list-patient',
  templateUrl: './view-list-patient.component.html',
  styleUrls: ['./view-list-patient.component.scss'],
})
export class ViewListPatientComponent implements AfterViewInit {
  patients: Patient[];

  constructor(private patientService: PatientService,
    private routes: Router) {}

  async ngAfterViewInit(): Promise<any> {
    const result = await this.patientService.getAll();
    this.patients = await result.patients;
    data => (this.patients = data);
  }

  getPatientById(row: any): string {
    const id = row._id;
    return id;
  }

  async delete(row: any): Promise<any> {
    try {
      const deleteUser = await this.patientService.deletePatient(row._id);
      const newList = await this.patientService.getPatient();
      for (let i = 0; i < this.patients.length; i++) {
        if (this.patients[i]['_id'] === row._id) {
          this.patients.splice(i, 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  modify(row: any) {
    this.routes.navigate(['modify-patients'],{queryParams:{id_patient:this.getPatientById(row)}});
  }

  
}
