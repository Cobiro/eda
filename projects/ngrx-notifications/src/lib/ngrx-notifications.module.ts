import { NgModule } from '@angular/core';
import { NgrxNotificationsComponent } from './ngrx-notifications.component';
import {CommonModule} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {StoreModule} from "@ngrx/store";
import {notificationFeatureKey, reducer} from "./store/notifications.selector";
import {provideApplicationEventHandler} from "../../../application-bus/src/lib/provide-application-event-handler";
import {CategorySelectedEventHandler} from "./event-handlers/category-selected.event-handler";
import {ProductAddedEventHandler} from "./event-handlers/product-added.event-handler";


@NgModule({
  declarations: [
    NgrxNotificationsComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    StoreModule.forFeature(notificationFeatureKey, reducer)
  ],
  exports: [
    NgrxNotificationsComponent
  ],
  providers: [
    provideApplicationEventHandler(CategorySelectedEventHandler),
    provideApplicationEventHandler(ProductAddedEventHandler)
  ]
})
export class NgrxNotificationsModule { }
