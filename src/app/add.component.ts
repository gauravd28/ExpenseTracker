import { Component, Input } from '@angular/core';
import { User } from './Model/user.model';
import { Expense } from './Model/expense.model';
import { CommonModule , DatePipe} from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector : 'add-expense',
    template:`
        <style>
            .btnBox{display: block;}
            
        </style>
        <div>
            <h2>Add new Expense:</h2>
            <input type="text" id="details" placeholder="Expense Details" [(ngModel)] ="expDetails" /><br><br>
            <input type="number" id="amount" placeholder="Amount" [(ngModel)] ="expAmount"  /><br><br>
            <div class="btnBox">
                <button type="submit" id="addExpenseBtn" (click) = "addExpense()">Add Expense</button>
            </div>
        </div>
    `,
    providers:[DatePipe]
})
export class AddComponent{
@Input() logUser : User;  
constructor(private datepipe:DatePipe,private db : AngularFireDatabase){}
private expDetails: string;
private expAmount: string;
 
addExpense(){
    var that = this;
        console.log(this.datepipe.transform(new Date(),'short')+" "+this.expDetails+" "+this.expAmount);
        var expense = new Expense(this.expDetails,this.expAmount,this.datepipe.transform(new Date(),'short'));

        var id = this.logUser.getId();
        var stringExp = JSON.stringify(expense);
        console.log(stringExp);
        console.log(id)
        var reference = this.db.database.ref('users/'+id).child('expenses');
        reference.push().set({
            "expDetails" :  that.expDetails,
            "expAmount" : that.expAmount,
            "expDateTime" : that.datepipe.transform(new Date(),'short')
        });
        console.log(reference)

        
        
        

    }

}