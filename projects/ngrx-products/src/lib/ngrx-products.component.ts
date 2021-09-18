import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromProducts from './store/products.selector';
import * as fromCategories from '../../../ngrx-categories/src/lib/store/categories.selector';
import {combineLatest, Observable} from "rxjs";
import {Product} from "../../../products/src/lib/products.service";
import {map, tap} from "rxjs/operators";
import {ProductsState} from "./store/products.selector";

@Component({
  selector: 'lib-ngrx-products',
  template: `
    <h3>Category products</h3>
    <ng-container *ngIf="categoryProducts$ | async as categoryProducts">
      <mat-list>
        <mat-list-item *ngFor="let product of categoryProducts">{{product.name}} {{product.price}}</mat-list-item>
      </mat-list>
    </ng-container>
  `,
})
export class NgrxProductsComponent{

  // @ts-ignore
  categoryProducts$: Observable<Product[]> = this.store.select(fromProducts.selectProducts).pipe(
    tap(console.log),
    map((state: ProductsState) => state.products.filter((product: Product) => product.categoryId === state.selectedCategory))
  )

  constructor(private store: Store) { }

}
