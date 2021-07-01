import { NgModule } from '@angular/core';
import { NgrxNotificationsComponent } from './ngrx-notifications.component';
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {StoreModule} from "@ngrx/store";
import * as fromNotifications from './store';

@NgModule({
  declarations: [
    NgrxNotificationsComponent
  ],
  imports: [
    MatSelectModule,
    CommonModule,
    StoreModule.forFeature(fromNotifications.notificationsFeatureKey, fromNotifications.reducer)
  ],
  exports: [
    NgrxNotificationsComponent
  ]
})
export class NgrxNotificationsModule { }
