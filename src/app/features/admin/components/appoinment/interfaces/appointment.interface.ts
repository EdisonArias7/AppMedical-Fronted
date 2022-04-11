export interface Appointment {
    id_appointment: number,
    hora_appointment: string,
    fecha_appointment: string,
    id_patient: number,
    id_doctor: number,
    consultorio_appointment:string
  };
  
  export interface responseAppointment {
    status: string,
    patients: Appointment[]
  };
  