import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserManagerComponent } from './page/main/form/user-manager/user-manager.component';
import { MainComponent } from './page/main/main.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  {path:'home', component:MainComponent,  canActivate: [AuthGuard]},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  // { path: '**', redirectTo: '/login' } // Wildcard route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
