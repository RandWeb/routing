import {Component, OnInit} from '@angular/core';
import {KeyValue} from "../models/KeyValue";
import {GradeService} from "../services/grade.service";
import {Employee} from "../models/Employee";

@Component({
  selector: 'app-employe-info',
  templateUrl: './employe-info.component.html',
  styleUrls: ['./employe-info.component.css']
})
export class EmployeInfoComponent implements OnInit {
  grades: KeyValue[] = [];
  employee: Employee | any;

  constructor(private gradeService: GradeService) {
  }

  ngOnInit(): void {
    this.grades = this.gradeService.getAll();
  }

  save(employee: any): void {
    this.employee = employee;
    console.log(this.employee);
  }
}
