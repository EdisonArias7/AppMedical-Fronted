import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  
  values1: string[] = [];
    
  values2: string[] = [];

  values3: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    //execute action
  }

}
