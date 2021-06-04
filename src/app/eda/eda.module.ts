import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ApplicationBusModule} from "../../../projects/application-bus/src/lib/application-bus.module";
import {EDAProductsModule} from "../../../projects/products/src/lib/eda-products.module";
import {EDACategoriesModule} from "../../../projects/categories/src/lib/eda-categories.module";
import {EDASettingsModule} from "../../../projects/settings/src/lib/eda-settings.module";
import {NotificationsModule} from "../../../projects/notifications/src/lib/notifications.module";
import {TokenBasedApplicationEventHandlerRegistry} from "../../../projects/application-bus/src/lib/token-based-application-event-handler.registry";
import {EdaComponent} from "./eda.component";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {EDARoutingModule} from "./eda.routing";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [EdaComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    EDAProductsModule,
    EDACategoriesModule,
    EDASettingsModule,
    NotificationsModule,
    ApplicationBusModule.forRoot(),
    EDARoutingModule
  ],
  exports: [EdaComponent],
  providers: [],
})
export class EDAModule {
  constructor(private registry: TokenBasedApplicationEventHandlerRegistry) {
    this.registry.init();
  }
}
