import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService :EmployeeService) { }
  employees:any[]=[]
  errorMessage:any;

  ngOnInit(): void {
    //this.employees=this.employeeService.getEmployees();
    this.employeeService.getEmployees().subscribe(data=>{
      this.employees=data;
    },errorData=>{
     this.errorMessage=errorData;
    })
  }

}
