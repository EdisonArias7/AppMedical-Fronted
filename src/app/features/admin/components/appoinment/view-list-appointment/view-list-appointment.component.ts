import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../../../../services/appointment.service';
import { Appointment } from '../interfaces/appointment.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-list-appointment',
  templateUrl: './view-list-appointment.component.html',
  styleUrls: ['./view-list-appointment.component.scss']
})
export class ViewListAppointmentComponent implements AfterViewInit {

  appointments: Appointment[];

  constructor(private appointmentService: AppointmentService,
    private routes: Router) { }

  async ngAfterViewInit(): Promise<any> {
    const result = await this.appointmentService.getAll();
    this.appointments = await result.appointments;
    data => (this.appointments = data);
  }

  getAppointmentById(row: any): string {
    const id = row._id;
    return id;
  }

  async delete(row: any): Promise<any> {
    try {
      const deleteUser = await this.appointmentService.deleteAppointment(row._id);
      const newList = await this.appointmentService.getAppointment();
      for (let i = 0; i < this.appointments.length; i++) {
        if (this.appointments[i]['_id'] === row._id) {
          this.appointments.splice(i, 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  modify(row: any) {
    this.routes.navigate(['modify-appointments'],{queryParams:{id_appointment:this.getAppointmentById(row)}});
  }

}
