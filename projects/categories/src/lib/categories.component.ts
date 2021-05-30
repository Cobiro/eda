import { Component, OnInit } from '@angular/core';
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";

@Component({
  selector: 'lib-categories',
  template: `
    <p>
      categories works!
    </p>
  `,
  styles: [
  ]
})
export class CategoriesComponent implements OnInit {

  constructor(private notif: NotificationsService) { }

  ngOnInit(): void {
  }

}
