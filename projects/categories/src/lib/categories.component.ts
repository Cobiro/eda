import {Component} from '@angular/core';
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";
import {CategoriesService} from "./categories.service";
import {MatSelectionListChange} from "@angular/material/list";

@Component({
  selector: 'lib-categories',
  template: `
    <h2>Your categories</h2>
    <mat-selection-list [multiple]="false" (selectionChange)="onCategorySelected($event)">
      <mat-list-option *ngFor="let category of categories$ | async" [value]="category.name" [matBadge]="category.productCount">{{category.name}}</mat-list-option>
    </mat-selection-list>
  `,
  styles: [
  ]
})
export class CategoriesComponent {

  public categories$ = this.categoryService.categories$;

  constructor(private notifier: NotificationsService, private categoryService: CategoriesService) { }

  onCategorySelected($event: MatSelectionListChange) {
    const categoryName = $event.source.selectedOptions.selected[0].value;
    this.categoryService.select(categoryName);
    this.notifier.notify(`Selected ${categoryName}`);
  }
}
