import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EdaComponent} from "./eda.component";

const routes: Routes = [
  {
    path: '',
    component: EdaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EDARoutingModule { }
