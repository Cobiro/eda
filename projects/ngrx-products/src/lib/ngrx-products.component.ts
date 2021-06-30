import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromProducts from './store/products.selector';
import * as fromCategories from '../../../ngrx-categories/src/lib/store/categories.selector';
import {Observable} from "rxjs";
import {Product} from "../../../products/src/lib/products.service";

@Component({
  selector: 'lib-ngrx-products',
  template: `
    <ng-container *ngIf="categoryProducts$ | async as categoryProducts">
      <h3>{{selectedCategory$ | async | json}} products</h3>
      <mat-list>
        <mat-list-item *ngFor="let product of categoryProducts.products">{{product.name}} {{product.price}}</mat-list-item>
      </mat-list>
    </ng-container>
  `,
})
export class NgrxProductsComponent implements OnInit {

  // @ts-ignore
  categoryProducts$: Observable<{ products: Product[] }> = this.store.select(fromProducts.selectProducts)
  // @ts-ignore
  selectedCategory$: Observable<any> = this.store.select(fromCategories.selectSelectedCategory);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
