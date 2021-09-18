import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardComponent } from './standard/standard.component';
import {NotificationsModule} from "../../../projects/notifications/src/lib/notifications.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {SettingsModule} from "../../../projects/settings/src/lib/settings.module";
import {CategoriesModule} from "../../../projects/categories/src/lib/categories.module";
import {ProductsModule} from "../../../projects/products/src/lib/products.module";



@NgModule({
  declarations: [
    StandardComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    NotificationsModule,
    MatCardModule,
    CategoriesModule,
    ProductsModule,
    SettingsModule
  ],
  exports: [
    StandardComponent
  ]
})
export class StandardModule { }
