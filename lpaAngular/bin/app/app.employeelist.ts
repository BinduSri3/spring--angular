import {Component,OnInit} from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';


@Component({
    selector:'<my-component></my-component>',
    templateUrl:'./app.employeecomponent.html',
    providers:[EmployeeService]
})
export class EmployeeList implements  OnInit{
    
    employees:Employee[];
    statusmessage:string;


constructor(private empservice:EmployeeService) {}
ngOnInit(): void {
    this.empservice.getAllEmployee().subscribe((employeeData)=>this.employees=employeeData,
    (error)=>{
        this.statusmessage="Problem with service check server"
           // console.error(error);
    }    
    );
 
}
delete(id:number):void{
    this.empservice.deleteEmployeeId(id).subscribe((employeeData)=>this.employees=employeeData,
            (error)=>{
                this.statusmessage="Problem with service check server"
                   // console.error(error);
            }    
            );
}
 
}