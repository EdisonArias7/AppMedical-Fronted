import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        routerLink: ["principal"],
        icon: 'pi pi-fw pi-power-off'
      },
      {
        label: 'Pacientes',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Nuevo paciente',
            routerLink: ["add-patient"],
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Listar pacientes',
            routerLink: ["view-patients"],
            icon: 'pi pi-fw pi-users',
          },
        ],
      },
      {
        label: 'Citas Medicas',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Agregar cita',
            routerLink: ["add-appointment"],
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Listar citas',
            routerLink: ["view-appointments"],
            icon: 'pi pi-fw pi-calendar',
          },
        ],
      },
      {
        label: 'Médicos',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'Nuevo médico',
            routerLink: ["add-doctor"],
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Listar médicos',
            routerLink: ["view-doctors"],
            icon: 'pi pi-fw pi-users',
          },
        ],
      },
    ];
  }
}
