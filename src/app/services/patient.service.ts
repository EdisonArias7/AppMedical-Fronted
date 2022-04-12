import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { responsePatient } from 'src/app/features/admin/components/patient-g/interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  path: string = 'http://localhost:3000/api/patient';

  getPatient(): Promise<any> {
    return this.http.get<any>(this.path).toPromise();
  }

  getPatientById(_id: string): Promise<any>{
    return this.http.get<any>(`${this.path}/${_id}`).toPromise();
  }

  deletePatient(_id: string): Promise<any>{
    return this.http.delete<any>(`${this.path}/${_id}`).toPromise();
  }

  editPatient(_id: string, body: any): Promise<any>{
    return this.http.put<any>(`${this.path}/${_id}`, body).toPromise();
  }

  registerPatient(data: any): Observable<any> {
    return this.http.post(`${this.path}/add-patient`, data);
  }

  getAllPatients(): Observable <responsePatient> {
    return this.http.get<responsePatient>(this.path);
  }

  getAll():Promise<any>{
    return this.http.get<any>(this.path).toPromise();
  }
}
