import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagerComponent } from './main/form/user-manager/user-manager.component';
import { FormComponent } from './main/form/form.component';
import { DataTableComponent } from './main/data-table/data-table.component';

const routes: Routes = [
  {path:'home/form', component:FormComponent},
  {path:'home/dataTable', component:DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
