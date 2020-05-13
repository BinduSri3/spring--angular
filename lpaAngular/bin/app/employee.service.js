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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
//import "rxjs/add/operator/throw"
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    //For All Application check your your REST URI-PORT & Path   
    //GET ALL
    EmployeeService.prototype.getAllEmployee = function () {
        return this.http.get("http://localhost:9090/SpringWithJpa/rest/employee").
            map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    //delete data
    EmployeeService.prototype.deleteEmployeeId = function (data) {
        console.log(data);
        return this.http
            .delete('http://localhost:9090/SpringWithJpa/rest/employee/delete/' + data)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleErrorDelete = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    //add data
    EmployeeService.prototype.addEmployee = function (data) {
        var empData = JSON.stringify(data);
        alert(empData);
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http
            .post('http://localhost:9090/SpringWithJpa/rest/employee/create/', empData, options)
            .map((function (success) { return success.status; }))
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleErrorAdd = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    //search data
    EmployeeService.prototype.searchEmployeeId = function (data) {
        console.log(data);
        return this.http
            .get('http://localhost:9090/SpringWithJpa/rest/employee/search/' + data)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleErrorSearch = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    //update Data 
    EmployeeService.prototype.updateEmployee = function (data) {
        var empData = JSON.stringify(data);
        alert(empData);
        var cpHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: cpHeaders });
        return this.http
            .put('http://localhost:9090/SpringWithJpa/rest/employee/update/', empData, options)
            .map((function (success) { return success.status; }))
            .catch(this.handleError);
    };
    EmployeeService.prototype.handleErrorupdate = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
