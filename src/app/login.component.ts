import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './Model/user.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'login',
    template : `
    <div style = "text-align : left">
    <h2>Login to Continue:</h2>
    <input type="text" id="uname" placeholder="Username" [(ngModel)] = "userName" required/><br><br>
    <input type="password" id="passwd" placeholder="Password" [(ngModel)] = "password" required/><br><br>
    <button type="submit" id="loginButton" (click) = "authenticate()">Login</button>
    </div>
    `
})
export class Login{
    
    constructor(private db : AngularFireDatabase){
        
    }

@Input() status;
@Input() loggedInUser;
@Output() statusChange = new EventEmitter<boolean>();
@Output() loggedInUserChange = new EventEmitter<User>();
private userName: string;
private password: string;

authenticate(){
    
    var that = this;
    var pass = null;
    var reference = this.db.database.ref('users/'+this.userName);
    reference.on('value',function(snapshot){
        if(snapshot.val()!=null){
            
            pass = snapshot.val().passwd;
            console.log('Password1 '+pass)
            let loginU = new User(reference.key,snapshot.val().name,snapshot.val().isAdmin);
            that.doAuth(pass,loginU);
        }else{
            that.doAuth(pass,null);
        }
        

        
    });
  
}

  doAuth(p:string,u:User){
      console.log("Passwd "+p)
       if(p!= null && p == this.password){
        this.status =  true;
        this.statusChange.emit(true);  
        this.loggedInUser = u;
        this.loggedInUserChange.emit(u); 
    }
  }  

}