import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<div><ul>
                            <li><a routerLink="getdata">Show ALL</a></li>
                            <li><a routerLink="postdata">ADD Employee</a></li>
                            <li><a routerLink="search">Search & Update Employee</a></li>
                          </ul>
                      <router-outlet></router-outlet>  </div>`
  
})
export class AppComponent { name = 'Welcome Angular 2'; }
