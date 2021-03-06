import {Component} from '@angular/core';
import {ProductsService} from "./products.service";
import {FormControl, FormGroup} from "@angular/forms";
import {combineLatest} from "rxjs";
import {map} from "rxjs/operators";
import {CategoriesService} from "../../../categories/src/lib/categories.service";
import {SettingsService} from "../../../settings/src/lib/settings.service";
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";

@Component({
  selector: 'lib-products',
  template: `
    <ng-container *ngIf="selectedCategory$ | async as selectedCategory">
      <ng-container *ngIf="categoryProducts$ | async as categoryProducts">
        <ng-container *ngIf="selectedCurrency$ | async as selectedCurrency">
          <h3>{{selectedCategory.name}} products</h3>
          <mat-list>
            <mat-list-item
              *ngFor="let product of categoryProducts">{{product.name}} {{selectedCurrency}}{{product.price}}</mat-list-item>
          </mat-list>
          <h3>Add new product</h3>
          <form [formGroup]="addProduct"
                (ngSubmit)="onFormSubmit(selectedCategory.name, categoryProducts.length, selectedCurrency)">
            <p>
              <mat-form-field>
                <mat-label>Name</mat-label>
                <input [formControlName]="'name'" type="text" matInput/>
              </mat-form-field>
            </p>
            <p>
              <mat-form-field>
                <mat-label>Price</mat-label>
                <span matPrefix>{{selectedCurrency}}&nbsp;</span>
                <input matInput [formControlName]="'price'" type="number"/>
              </mat-form-field>
            </p>
            <button type="submit" mat-raised-button color="primary">Add</button>
          </form>
        </ng-container>
      </ng-container>
    </ng-container>
  `,
})
export class ProductsComponent {

  public addProduct = new FormGroup({
    name: new FormControl([]),
    price: new FormControl([])
  });

  public selectedCurrency$ = this.settings.selectedCurrency$;

  public selectedCategory$ = this.categoryService.selectedCategory$;

  categoryProducts$ = combineLatest([
    this.selectedCategory$,
    this.productService.products$
  ]).pipe(
    map(([selectedCategory, allProducts]) => allProducts.filter(product => product.categoryId === selectedCategory.name))
  );

  constructor(
    private productService: ProductsService,
    private categoryService: CategoriesService,
    private settings: SettingsService,
    private notifier: NotificationsService
  ) {
  }

  onFormSubmit(categoryId: string, currentProductCount: number, currency: string) {
    const productName = this.addProduct.get('name')?.value;
    const productPrice = this.addProduct.get('price')?.value;
    if (productName && productPrice) {
      this.productService.add(productName, productPrice, categoryId);
      this.addProduct.reset();
      this.categoryService.setProductCount(currentProductCount + 1, categoryId);
      this.notifier.notify(`Added ${productName} ${currency}${productPrice}`);
    }
  }

}
