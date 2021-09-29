import {NgModule} from '@angular/core';
import {NotificationsComponent} from './notifications.component';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";
import {CategorySelectedEventHandler} from "./event-handlers/category-selected.event-handler";
import {CurrencyChangedEventHandler} from "./event-handlers/currency-changed.event-handler";
import {ProductAddedEventHandler} from "./event-handlers/product-added.event-handler";
import {provideApplicationEventHandler} from "@cobiro/eda";

@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule, BrowserModule, MatSelectModule
  ],
  exports: [
    NotificationsComponent
  ],
  providers: [
    provideApplicationEventHandler(CategorySelectedEventHandler),
    provideApplicationEventHandler(CurrencyChangedEventHandler),
    provideApplicationEventHandler(ProductAddedEventHandler)
  ]
})
export class NotificationsModule { }
