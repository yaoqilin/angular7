import { NgModel } from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";

const routes: Routes = [
  {
    path:'main',
    component:MainComponent
  }
];

@NgModel({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MainRoutingModule {

}
