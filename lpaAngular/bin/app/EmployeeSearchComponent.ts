
import { Component } from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router'
@Component({
 
  templateUrl:'./app.searchupdate.html',
  providers:[EmployeeService]
  
})
export class EmployeeSearchComponent {
    constructor(private empservice:EmployeeService,private router:Router) {}
    statusmessage:string;
    msg:boolean=false;
    //employees:Employee[];
    model:any={};
    eid:any="";

searchData():void{
    this.empservice.searchEmployeeId(this.eid).subscribe((employeeData)=>this.model=employeeData,
            (error)=>{
                this.statusmessage="Problem with service check server"
                   // console.error(error);
            }    
            );
    this.msg=true;
    //console.log(this.employees);
}
updateemployee():void{
    this.empservice.updateEmployee(this.model).subscribe((employeeData)=>this.model=employeeData,
            (error)=>{
                this.statusmessage="Problem with service check server"
                   // console.error(error);
            }    
            );
  //Navigate from EmployeeSearchComponent to EmployeeList
    this.router.navigate(['/getdata']);
}

}