import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";
import {SetupComponent} from "./pages/setup/setup.component";
import {InitGuardService} from "./services/init-guard/init-guard.service";

const routes: Routes = [
  {
    path:'setup',
    component:SetupComponent,
    canActivate: [ InitGuardService ]
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
