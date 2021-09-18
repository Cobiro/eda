import { NgModule } from '@angular/core';
import { NgrxCategoriesComponent } from './ngrx-categories.component';
import {MatListModule} from "@angular/material/list";
import {MatBadgeModule} from "@angular/material/badge";
import {StoreModule} from "@ngrx/store";
import * as fromCategories from './store';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    NgrxCategoriesComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatBadgeModule,
    StoreModule.forFeature(fromCategories.categoriesFeatureKey, fromCategories.reducer),
  ],
  exports: [
    NgrxCategoriesComponent
  ]
})
export class NgrxCategoriesModule { }
