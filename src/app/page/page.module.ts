import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';


import { DataTableComponent } from './main/data-table/data-table.component';
import { FormComponent } from './main/form/form.component';
import { UserManagerComponent } from './main/form/user-manager/user-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { UserService } from '../data.service';
import { AppComponent } from '../app.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    DataTableComponent,
    FormComponent,
    UserManagerComponent,
    MainComponent
  ],  
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    PageRoutingModule
  ],
  exports:[
    MainComponent,
    UserManagerComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class PageModule { }
