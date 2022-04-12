import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { responseAppointment } from 'src/app/features/admin/components/appoinment/interfaces/appointment.interface';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  path: string = 'http://localhost:3000/api/appointment';

  getAppointment(): Promise<any> {
    return this.http.get<any>(this.path).toPromise();
  }

  getAppointmeById(_id: string): Promise<any>{
    return this.http.get<any>(`${this.path}/${_id}`).toPromise();
  }

  deleteAppointment(_id: string): Promise<any>{
    return this.http.delete<any>(`${this.path}/${_id}`).toPromise();
  }

  editAppointment(_id: string, body: any): Promise<any>{
    return this.http.put<any>(`${this.path}/${_id}`, body).toPromise();
  }

  registerAppointment(data: any): Observable<any> {
    return this.http.post(`${this.path}/add-appointment`, data);
  }

  getAllAppointment(): Observable <responseAppointment> {
    return this.http.get<responseAppointment>(this.path);
  }

  getAll():Promise<any>{
    return this.http.get<any>(this.path).toPromise();
  }
}
