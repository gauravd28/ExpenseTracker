import { Component, OnInit } from '@angular/core';
import { User } from './Model/user.model';
import { CommonModule } from '@angular/common';
import { Login } from './login.component';
import { Logout } from './logout.component';
import { MenuComponent } from './menu.component';
import { ViewComponent } from './view.component';

@Component({
  selector: 'app-root',
  template: `
  <style type="text/css">
  .container > .panel{float:left;width:33%}
  .container{
      text-align: center;
      }
  .panel{display: block, height:100%; overflow : auto; min-height:540px}
  #leftPanel{width:25%;background: #66b3ff;}
  #rightPanel{width:25%;background: #66b3ff;}
  #centerPanel{width:50%;background: #8491a5;}
  </style>

  <div style="text-align:center">
    <h1>{{title}}</h1>
  </div>
  
  <div class="container">
  
  <div class="panel" id="leftPanel">
  
    <h2 *ngIf='isAuth()' style="text-align:left">Logged in as: {{loginUser.name}}</h2>
    <login *ngIf='!isAuth()' [(status)] = 'loggedIn' [(loggedInUser)] = 'loginUser'></login>
    <logout *ngIf='isAuth()' [(status)] = 'loggedIn'></logout>
   
  </div>
  
  <div class="panel" id="centerPanel">
  
    <menu *ngIf='isAuth()' [(logUser)] = 'loginUser'></menu>
  
  </div>
  
  <div class="panel" id="rightPanel">
    <view-expenses *ngIf='isAuth()' [(logUser)] = 'loginUser'></view-expenses>
  </div>
  
  </div>
  `
})
export class AppComponent {
  title = 'Personal Expense Tracker';
  public loggedIn : boolean;
  loginUser : User = null;

  ngOnInit(){
    this.loggedIn = false;
  }

  isAuth(){
    return this.loggedIn == true;
  }



}
