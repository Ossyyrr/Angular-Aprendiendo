import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/Interfaces/students.interface';
import { apiResponse } from 'src/app/api/characters.api';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: Istudent[];

  constructor() { }

  ngOnInit() {
    this.students = apiResponse;
  }

}
