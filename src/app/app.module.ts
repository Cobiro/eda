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
import {TokenBasedApplicationEventHandlerRegistry} from "../../projects/application-bus/src/lib/token-based-application-event-handler.registry";
import {EDACategoriesModule} from "../../projects/categories/src/lib/eda-categories.module";
import {EDASettingsComponent} from "../../projects/settings/src/lib/eda-settings.component";
import {EDAProductsComponent} from "../../projects/products/src/lib/eda-products.component";
import {EDASettingsModule} from "../../projects/settings/src/lib/eda-settings.module";
import {EDAProductsModule} from "../../projects/products/src/lib/eda-products.module";
import { EdaComponent } from './eda/eda.component';
import {AppRoutingModule} from "./app.routing";
import { StandardComponent } from './standard/standard.component';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {StandardModule} from "./standard/standard.module";
import {EDAModule} from "./eda/eda.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule,
    StandardModule,
    EDAModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private registry: TokenBasedApplicationEventHandlerRegistry) {
    this.registry.init();
  }
}
