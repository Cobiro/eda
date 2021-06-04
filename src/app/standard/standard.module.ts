import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {CategoriesModule} from "../../../projects/categories/src/lib/categories.module";
import {SettingsModule} from "../../../projects/settings/src/lib/settings.module";
import {ProductsModule} from "../../../projects/products/src/lib/products.module";
import {NotificationsModule} from "../../../projects/notifications/src/lib/notifications.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {StandardComponent} from "./standard.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StandardRoutingModule} from "./standard.routing";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [StandardComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CategoriesModule,
    SettingsModule,
    ProductsModule,
    NotificationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    StandardRoutingModule
  ],
  exports: [StandardComponent],
  providers: [],
})
export class StandardModule {}
