"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var router_1 = require("@angular/router");
var EmployeeSearchComponent = (function () {
    function EmployeeSearchComponent(empservice, router) {
        this.empservice = empservice;
        this.router = router;
        this.msg = false;
        //employees:Employee[];
        this.model = {};
        this.eid = "";
    }
    EmployeeSearchComponent.prototype.searchData = function () {
        var _this = this;
        this.empservice.searchEmployeeId(this.eid).subscribe(function (employeeData) { return _this.model = employeeData; }, function (error) {
            _this.statusmessage = "Problem with service check server";
            // console.error(error);
        });
        this.msg = true;
        //console.log(this.employees);
    };
    EmployeeSearchComponent.prototype.updateemployee = function () {
        var _this = this;
        this.empservice.updateEmployee(this.model).subscribe(function (employeeData) { return _this.model = employeeData; }, function (error) {
            _this.statusmessage = "Problem with service check server";
            // console.error(error);
        });
        //Navigate from EmployeeSearchComponent to EmployeeList
        this.router.navigate(['/getdata']);
    };
    return EmployeeSearchComponent;
}());
EmployeeSearchComponent = __decorate([
    core_1.Component({
        templateUrl: './app.searchupdate.html',
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.Router])
], EmployeeSearchComponent);
exports.EmployeeSearchComponent = EmployeeSearchComponent;
