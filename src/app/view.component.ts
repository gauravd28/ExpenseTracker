import { Component,Input,OnInit} from '@angular/core';
import { User } from './Model/user.model';
import { Expense } from './Model/expense.model';
import { AngularFireDatabase, FirebaseListObservable , FirebaseObjectObservable} from 'angularfire2/database';
import { CommonModule} from '@angular/common';

@Component({
    selector : 'view-expenses',
    template:`
    <h2>Viewing for {{logUser.getName()}}</h2>
    <ul>
        <li *ngFor="let expense of expList">
            <h2>{{expense.expDetails}}</h2>
        </li>
    <ul>
    `
})
export class ViewComponent implements OnInit{
@Input() logUser : User;
private expList : Array<Expense> = [];
    constructor(private db : AngularFireDatabase){
        
    }

    ngOnInit(){
    
       this.getData(); 
  
    }

    getData(){
        var that = this;
        var id = this.logUser
        
        var reference = this.db.database.ref('users/'+this.logUser.getId()+'/expenses');
        console.log("Hello "+reference);
        reference.on('value',function(snapshot){
        console.log(JSON.parse(JSON.stringify(snapshot.val())));
        if(snapshot.val()!=null){
           
           that.expList.length = 0;
           snapshot.forEach((childSnapshot) => {

               that.expList.push(new Expense(childSnapshot.val().expDetails,childSnapshot.val().expAmount,childSnapshot.val().expDateTime));
               return false;
           });
            
        }
    });
    }





}