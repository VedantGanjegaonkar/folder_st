import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagerComponent } from './page/main/form/user-manager/user-manager.component';
import { MainComponent } from './page/main/main.component';
import { SignupComponent } from './authentication/signup/signup.component';

const routes: Routes = [
  {path:'home', component:MainComponent},
  {path:'signup', component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
