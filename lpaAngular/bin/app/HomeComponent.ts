
import { Component, OnInit } from '@angular/core';
import { Employee } from "./employee";
import { EmployeeService } from "./employee.service";
import {Router} from '@angular/router'
@Component({
  selector: 'my-app',
  templateUrl:'./homecomponent.html',
      providers:[EmployeeService]
})
export class HomeComponent {
   
    employees:Employee[];
statusmessage:string;
constructor(private empservice:EmployeeService,private router:Router) {}
    
    
    model:any={};

addData():void{
    this.empservice.addEmployee(this.model).subscribe((employeeData)=>this.employees=employeeData,
            (error)=>{
                this.statusmessage="Problem with service check server"
                   // console.error(error);
            }    
            );
    //Navigate from HomeComponent to EmployeeList
    this.router.navigate(['/getdata']);
}
    
}
