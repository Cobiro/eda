import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {StandardComponent} from "./standard.component";

const routes: Routes = [
  {
    path: '',
    component: StandardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StandardRoutingModule { }
