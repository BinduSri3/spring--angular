import { Injectable }      from '@angular/core';
import {Employee} from './employee';
import {Http,Response,Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
//import "rxjs/add/operator/throw"
@Injectable()
export class EmployeeService{
   
    constructor(private http:Http) {}
  //For All Application check your your REST URI-PORT & Path   
    //GET ALL -with Spring JPA-http://localhost:9090/SpringWithJpa/rest/employee
    getAllEmployee():Observable<Employee[]> 
{ return  this.http.get("http://localhost:9090/SpringWithAngular/rest/employee").
        map((response:Response)=><Employee[]>response.json())
        .catch(this.handleError);
    }
    handleError(error: Response){
        console.error(error);
        return Observable.throw(error);
    }
    
    
    //delete data--with Spring JPA-http://localhost:9090/SpringWithJpa/rest/employee/delete/
    deleteEmployeeId(data:number): Observable<Employee[]> {
        console.log(data)
        return this.http
            .delete('http://localhost:9090/SpringWithAngular/rest/employee/delete/'+data)
            .map((response:Response)=><Employee[]>response.json())
            .catch(this.handleError);
        }
        handleErrorDelete(error: Response){
            console.error(error);
            return Observable.throw(error);
        }
        //add data--with Spring JPA-http://localhost:9090/SpringWithJpa/rest/employee/create/
        addEmployee(data:Employee): Observable<Employee[]> {
            let empData=JSON.stringify(data);
            alert(empData);
            let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: cpHeaders });
            
            return this.http
                .post('http://localhost:9090/SpringWithAngular/rest/employee/create/',empData,options)
                .map((success => success.status))
                .catch(this.handleError);
            }
            handleErrorAdd(error: Response){
                console.error(error);
                return Observable.throw(error);
            }
            //search data--with Spring JPA-http://localhost:9090/SpringWithJpa/rest/employee/search/
            searchEmployeeId(data:number): Observable<Employee[]> {
                console.log(data)
                return this.http
                    .get('http://localhost:9090/SpringWithAngular/rest/employee/search/'+data)
                    .map((response:Response)=><Employee[]>response.json())
                    .catch(this.handleError);
                }
                handleErrorSearch(error: Response){
                    console.error(error);
                    return Observable.throw(error);
                }
                //update Data --with Spring JPA-http://localhost:9090/SpringWithJpa/rest/employee/update/
                updateEmployee(data:Employee): Observable<Employee[]> {
                    let empData=JSON.stringify(data);
                    alert(empData);
                    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
                    let options = new RequestOptions({ headers: cpHeaders });
                    
                    return this.http
                        .put('http://localhost:9090/SpringWithAngular/rest/employee/update/',empData,options)
                        .map((success => success.status))
                        .catch(this.handleError);
                    }
                    handleErrorupdate(error: Response){
                        console.error(error);
                        return Observable.throw(error);
                    }
    }
