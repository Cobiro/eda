import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CategoriesModule} from "../../projects/categories/src/lib/categories.module";
import {SettingsModule} from "../../projects/settings/src/lib/settings.module";
import {ProductsModule} from "../../projects/products/src/lib/products.module";
import {NotificationsModule} from "../../projects/notifications/src/lib/notifications.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CategoriesModule,
    SettingsModule,
    ProductsModule,
    NotificationsModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
