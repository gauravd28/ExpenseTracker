import { Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add.component';
import { User } from './Model/user.model';


@Component({
    selector :'menu',
    template:`
    <div style = "text-align : center" >
        <button type="button" id="addMyExpense">Add Expense</button>
        <button type="button" id="updateMyExpense">Update Expense</button>
        <button type="button" id="deleteMyExpense">Delete Expense</button>
        <button *ngIf="checkIfAdmin()" type="button" id="viewAllExpenses">View All Expense</button>

    </div>
    <br><br><br>
    <div style = "text-align : center" >
        <add-expense [(logUser)] = "logUser"></add-expense>
    </div>
    `
})
export class MenuComponent{
@Input() logUser : User;

checkIfAdmin(){
    return this.logUser.getIsAdmin();
}


}