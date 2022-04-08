import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { responseDoctor } from 'src/app/features/admin/components/doctor/interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  path: string = 'http://localhost:3000/api/doctors';

  getDoctor(): Promise<any> {
    return this.http.get<any>(this.path).toPromise();
  }

  getDoctorById(_id: string): Promise<any>{
    return this.http.get<any>(`${this.path}/${_id}`).toPromise();
  }

  deleteDoctor(_id: string): Promise<any>{
    return this.http.delete<any>(`${this.path}/${_id}`).toPromise();
  }

  editDoctor(_id: string, body: any): Promise<any>{
    return this.http.put<any>(`${this.path}/${_id}`, body).toPromise();
  }

  registerDoctor(data: any): Observable<any> {
    return this.http.post(`${this.path}/add-artist`, data);
  }
  getAllDoctors(): Observable <responseDoctor> {
    return this.http.get<responseDoctor>(this.path);
  }
}
