import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {provideApplicationEventHandler} from "../../../application-bus/src/lib/provide-application-event-handler";
import {CategorySelectedEventHandler} from "./event-handlers/category-selected.event-handler";
import {CurrencyChangedEventHandler} from "./event-handlers/currency-changed.event-handler";
import {SettingsService} from "../../../settings/src/lib/settings.service";
import {ProductsService} from "./products.service";
import {CategoriesService} from "../../../categories/src/lib/categories.service";
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    ReactiveFormsModule, CommonModule, MatListModule, MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    ProductsService,
    CategoriesService,
    SettingsService,
    NotificationsService
  ]
})
export class ProductsModule { }
