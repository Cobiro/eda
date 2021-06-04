import {NgModule} from '@angular/core';
import {EDAProductsComponent} from './eda-products.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {provideApplicationEventHandler} from "../../../application-bus/src/lib/provide-application-event-handler";
import {CategorySelectedEventHandler} from "./event-handlers/category-selected.event-handler";
import {CurrencyChangedEventHandler} from "./event-handlers/currency-changed.event-handler";
import {ProductsService} from "./products.service";


@NgModule({
  declarations: [
    EDAProductsComponent
  ],
  imports: [
    ReactiveFormsModule, CommonModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  exports: [
    EDAProductsComponent
  ],
  providers: [
    ProductsService,
    provideApplicationEventHandler(CategorySelectedEventHandler),
    provideApplicationEventHandler(CurrencyChangedEventHandler),
  ]
})
export class EDAProductsModule { }
