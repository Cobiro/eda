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
import {ApplicationBusModule} from "../../projects/application-bus/src/lib/application-bus.module";
import {provideApplicationEventHandler} from "../../projects/application-bus/src/lib/provide-application-event-handler";
import {CategorySelectedEventHandler} from "../../projects/notifications/src/lib/event-handlers/category-selected.event-handler";
import {TokenBasedApplicationEventHandlerRegistry} from "../../projects/application-bus/src/lib/token-based-application-event-handler.registry";

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
    MatCardModule,
    ApplicationBusModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private registry: TokenBasedApplicationEventHandlerRegistry) {
    this.registry.init();
  }
}
