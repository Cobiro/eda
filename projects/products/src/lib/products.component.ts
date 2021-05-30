import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../../categories/src/lib/categories.service";
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";
import {SettingsService} from "../../../settings/src/lib/settings.service";

@Component({
  selector: 'lib-products',
  template: `
    <p>
      products works!
    </p>
  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor(private categories: CategoriesService, private notif: NotificationsService, private s: SettingsService) { }

  ngOnInit(): void {
  }

}
