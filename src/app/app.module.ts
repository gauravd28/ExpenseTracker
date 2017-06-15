import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from './login.component';
import { Logout } from './logout.component';
import { MenuComponent } from './menu.component';
import { ViewComponent } from './view.component';
import { AddComponent } from './add.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {firebaseConfig} from './Firebase/firebase.config'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, Login, Logout, MenuComponent, ViewComponent, AddComponent
  ],
  imports: [
    BrowserModule, FormsModule, CommonModule,
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
