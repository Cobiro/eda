import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {EdaComponent} from "./eda/eda.component";
import {StandardComponent} from "./standard/standard.component";

const routes: Routes = [
  {
    path: 'standard',
    loadChildren: () => import('./standard/standard.module').then(m => m.StandardModule)
  },
  {
    path: 'eda',
    loadChildren: () => import('./eda/eda.module').then(m => m.EDAModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
