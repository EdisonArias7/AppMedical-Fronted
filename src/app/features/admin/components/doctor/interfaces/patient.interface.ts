export interface Doctor {
    id_doctor: number,
    name_doctor: string,
    lastname_doctor: string,
    cedula_doctor:number,
    telefono_doctor: number,
    direccion_doctor:string
  };
  
  export interface responseDoctor {
    status: string,
    doctors: Doctor[]
  };
  