import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {StandardComponent} from "../pages/standard/standard/standard.component";
import {NgrxComponent} from "../pages/ngrx/ngrx/ngrx.component";

const APP_ROUTES = [
  {
    path: '',
    component: StandardComponent,
  },
  {
    path: 'ngrx',
    component: NgrxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
