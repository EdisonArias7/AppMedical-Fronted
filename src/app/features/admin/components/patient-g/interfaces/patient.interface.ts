export interface Patient {
    id_patient: number,
    name_patient: string,
    lastname_patient: string,
    sexo_patient: string,
    telefono_patient: number,
    direccion_patient:string
  };
  
  export interface responsePatient {
    status: string,
    patients: Patient[]
  };
  