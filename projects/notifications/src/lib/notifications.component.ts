import {Component, OnInit} from '@angular/core';
import {NotificationsService} from "./notifications.service";

@Component({
  selector: 'lib-notifications',
  template: `
    <mat-select *ngIf="notifications$ | async as notifications">
      <mat-option *ngFor="let notification of notifications">{{notification.text}}</mat-option>
    </mat-select>
  `,
})
export class NotificationsComponent {

  notifications$ = this.notificationService.data$;

  constructor(private notificationService: NotificationsService) { }
}
