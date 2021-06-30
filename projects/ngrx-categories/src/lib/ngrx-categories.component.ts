import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {MatSelectionListChange} from "@angular/material/list";
import {selectCategory} from "./store/select-category.action";
import {Observable} from "rxjs";
import {Category} from "../../../categories/src/lib/categories.service";
import * as fromCategories from "./store/categories.selector";

@Component({
  selector: 'lib-ngrx-categories',
  template: `<h2>Your categories</h2>
  <mat-selection-list [multiple]="false" (selectionChange)="onCategorySelected($event)" *ngIf="categories$ | async as categories">
    <mat-list-option *ngFor="let category of categories.categories" [value]="category.name" [matBadge]="category.productCount">{{category.name}}</mat-list-option>
  </mat-selection-list>`,
})
export class NgrxCategoriesComponent implements OnInit {

  public categories$: Observable<{ categories: Category[] }> = this.store.select(fromCategories.selectCategories);

  constructor(private store: Store) { }

  ngOnInit() {}

  onCategorySelected($event: MatSelectionListChange) {
    const categoryName = $event.source.selectedOptions.selected[0].value;
    this.store.dispatch(selectCategory(categoryName));
  }

}
