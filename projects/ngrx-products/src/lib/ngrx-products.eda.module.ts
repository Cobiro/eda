import { NgModule } from '@angular/core';
import { NgrxProductsComponent } from './ngrx-products.component';
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {StoreModule} from "@ngrx/store";
import * as fromProducts from "./store/products.selector";
import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "./store/products.effects";
import {ProductsEDAEffects} from "./store/products.eda.effects";

@NgModule({
  imports: [
    EffectsModule.forFeature([ProductsEDAEffects])
  ],
})
export class NgrxProductsEDAModule { }
