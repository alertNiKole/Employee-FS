import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment'; // import environment

import { AngularFireModule } from 'angularfire2'//AngFire2

// Import the Angularfire modules
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';
import { EmployeesComponent } from './components/employees/employees.component';

//Import the Service item
import {ItemService} from './services/item.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    EmployeesComponent,
    NavbarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'employee-FS'),
    AngularFirestoreModule
  ],
  
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
