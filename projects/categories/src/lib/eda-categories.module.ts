import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {MatListModule} from "@angular/material/list";
import {ReactiveFormsModule} from "@angular/forms";
import {MatBadgeModule} from "@angular/material/badge";
import {EDACategoriesComponent} from "./eda-categories.component";
import {CategoriesService} from "./categories.service";
import {provideApplicationEventHandler} from "../../../application-bus/src/lib/provide-application-event-handler";
import {ProductAddedEventHandler} from "./event-handlers/product-added.event-handler";


@NgModule({
  declarations: [
    EDACategoriesComponent
  ],
  imports: [
    CommonModule, BrowserModule, MatListModule, ReactiveFormsModule, MatBadgeModule
  ],
  exports: [
    EDACategoriesComponent
  ],
  providers: [
    CategoriesService,
    provideApplicationEventHandler(ProductAddedEventHandler)
  ]
})
export class EDACategoriesModule { }
