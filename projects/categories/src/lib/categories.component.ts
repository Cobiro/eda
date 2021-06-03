import {Component, Inject} from '@angular/core';
import {CategoriesService} from "./categories.service";
import {MatSelectionListChange} from "@angular/material/list";
import {Dispatcher} from "../../../application-bus/src/lib/dispatcher";
import {AppEvent} from "../../../application-bus/src/lib/application.event";
import {CategorySelectedEvent} from "../../../events/src/lib/category-selected.event";
import {APPLICATION_BUS} from "../../../application-bus/src/lib/application.bus";
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";

@Component({
  selector: 'lib-categories',
  template: `
    <h2>Your categories</h2>
    <mat-selection-list [multiple]="false" (selectionChange)="onCategorySelected($event)">
      <mat-list-option *ngFor="let category of categories$ | async" [value]="category.name" [matBadge]="category.productCount">{{category.name}}</mat-list-option>
    </mat-selection-list>
  `,
})
export class CategoriesComponent {

  public categories$ = this.categoryService.categories$;

  constructor(
    private categoryService: CategoriesService,
    private notifier: NotificationsService,
  ) { }

  onCategorySelected($event: MatSelectionListChange) {
    const categoryName = $event.source.selectedOptions.selected[0].value;
    this.categoryService.select(categoryName);
    this.notifier.notify(`Selected ${categoryName}`);
  }
}
