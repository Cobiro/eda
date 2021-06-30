import { NgModule } from '@angular/core';
import { NgrxProductsComponent } from './ngrx-products.component';
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from "@ngrx/store";
import * as fromProducts from "./store/products.selector";



@NgModule({
  declarations: [
    NgrxProductsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    StoreModule.forFeature(fromProducts.productsFeatureKey, fromProducts.reducer)
  ],
  exports: [
    NgrxProductsComponent
  ]
})
export class NgrxProductsModule { }
