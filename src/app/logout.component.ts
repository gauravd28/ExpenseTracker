import { Component , Input, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from './Model/user.model';


@Component({
    selector: 'logout',
    template : `
    <div style = "text-align : left" >
        <button type="button" id="logoutButton" (click) = "logOut()">Logout</button>
    </div>
    `
})
export class Logout{
@Input() status : boolean;
@Output() statusChange = new EventEmitter<boolean>();
logOut(){
   this.status =  false; 
   this.statusChange.emit(false);
}


    

}