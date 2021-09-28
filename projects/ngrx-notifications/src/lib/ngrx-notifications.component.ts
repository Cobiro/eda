import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {selectNotifications} from "./store/notifications.selector";
import {Store} from "@ngrx/store";
import {Notification} from "../../../notifications/src/lib/notifications.service";

@Component({
  selector: 'lib-ngrx-notifications',
  template: `
    <mat-select *ngIf="notifications$ | async as notifications">
      <mat-option *ngFor="let notification of notifications.notifications">{{notification.text}}</mat-option>
    </mat-select>
  `,
  styles: [
  ]
})
export class NgrxNotificationsComponent {

  // @ts-ignore
  notifications$: Observable<{ notifications: Notification[] }> = this.store.select(selectNotifications)

  constructor(private store: Store) { }

}
