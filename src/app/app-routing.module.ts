import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagerComponent } from './page/main/form/user-manager/user-manager.component';
import { MainComponent } from './page/main/main.component';

const routes: Routes = [
  {path:'home', component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
