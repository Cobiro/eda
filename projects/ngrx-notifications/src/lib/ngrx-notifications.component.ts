import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {selectNotifications} from "./store";
import {Observable} from "rxjs";
import {Notification} from "../../../notifications/src/lib/notifications.service";

@Component({
  selector: 'lib-ngrx-notifications',
  template: `
    <mat-select *ngIf="notifications$ | async as notifications">
      <mat-option *ngFor="let notification of notifications">{{notification.text}}</mat-option>
    </mat-select>
  `
})
export class NgrxNotificationsComponent {

  notifications$: Observable<Notification[]> = this.store.select(selectNotifications);

  constructor(private store: Store) { }

}
