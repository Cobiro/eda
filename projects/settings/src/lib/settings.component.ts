import { Component, OnInit } from '@angular/core';
import {SettingsService} from "./settings.service";
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";

@Component({
  selector: 'lib-settings',
  template: `
    <p>
      settings works!
    </p>
  `,
  styles: [
  ]
})
export class SettingsComponent implements OnInit {

  constructor(private s: NotificationsService) { }

  ngOnInit(): void {
  }

}
