import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as fromProducts from './store';
import {combineLatest, Observable} from "rxjs";
import {Product} from "../../../products/src/lib/products.service";

@Component({
  selector: 'lib-ngrx-products',
  template: `
    <ng-container *ngIf="products$ | async as categoryProducts">
      <h3>{{selectedCategory$ | async}} products</h3>

      <mat-list>
        <mat-list-item *ngFor="let product of categoryProducts">{{product.name}} {{product.price}}</mat-list-item>
      </mat-list>
    </ng-container>
  `,
})
export class NgrxProductsComponent implements OnInit {

  // @ts-ignore
  products$: Observable<Product[]> = this.store.select(fromProducts.selectProducts);
  // @ts-ignore
  selectedCategory$: Observable<string> = this.store.select(fromProducts.selectSelectedCategory);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
