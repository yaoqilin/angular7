import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./component/login/login.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'/',
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
