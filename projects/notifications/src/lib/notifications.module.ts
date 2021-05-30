import {NgModule} from '@angular/core';
import {NotificationsComponent} from './notifications.component';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule, BrowserModule, MatSelectModule
  ],
  exports: [
    NotificationsComponent
  ]
})
export class NotificationsModule { }
