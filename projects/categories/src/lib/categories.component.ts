import {Component} from '@angular/core';
import {CategoriesService} from "./categories.service";
import {MatSelectionListChange} from "@angular/material/list";
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
