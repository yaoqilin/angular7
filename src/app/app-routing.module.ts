import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";
import {SetupComponent} from "./pages/setup/setup.component";

const routes: Routes = [
  {
    path:'setup',
    component:SetupComponent
  },
  {
    path: 'main',
    redirectTo:'/main',
    pathMatch:'full'
  },
  {
    path:'',
    redirectTo:'/setup',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
