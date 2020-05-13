import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { EmployeeList }  from './app.employeelist';
import { HomeComponent }  from './HomeComponent';
import { EmployeeSearchComponent }  from './EmployeeSearchComponent';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes=[
                     { path: '',  redirectTo:'/getdata',pathMatch: 'full'},
                     { path: 'getdata',  component: EmployeeList},
                     { path: 'postdata',  component: HomeComponent },
                     {path:'search',component:EmployeeSearchComponent}
                      ];
@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent,EmployeeList,HomeComponent,EmployeeSearchComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
