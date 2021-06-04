import {Component, Inject} from '@angular/core';
import {ProductsService} from "./products.service";
import {FormControl, FormGroup} from "@angular/forms";
import {combineLatest} from "rxjs";
import {map, tap} from "rxjs/operators";
import {APPLICATION_BUS} from "../../../application-bus/src/lib/application.bus";
import {Dispatcher} from "../../../application-bus/src/lib/dispatcher";
import {AppEvent} from "../../../application-bus/src/lib/application.event";
import {ProductAddedEvent} from "../../../events/src/lib/product-added.event";
import {CategoriesService} from "../../../categories/src/lib/categories.service";
import {SettingsService} from "../../../settings/src/lib/settings.service";
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";

@Component({
  selector: 'lib-eda-products',
  templateUrl: 'products.component.html',
})
export class EDAProductsComponent {

  public addProduct = new FormGroup({
    name: new FormControl([]),
    price: new FormControl([])
  });

  public selectedCurrency$ = this.productService.selectedCurrency$;

  public selectedCategory$ = this.productService.selectedCategory$;

  categoryProducts$ = combineLatest([
    this.selectedCategory$,
    this.productService.products$
  ]).pipe(
    map(([selectedCategory, allProducts]) => allProducts.filter(product => product.categoryId === selectedCategory.name))
  );

  constructor(
    private productService: ProductsService,
    @Inject(APPLICATION_BUS) private dispatcher: Dispatcher<ProductAddedEvent>
  ) { }

  onFormSubmit(categoryId: string, currentProductCount: number, currency: string) {
    const productName = this.addProduct.get('name')?.value;
    const productPrice = this.addProduct.get('price')?.value;
    if (productName && productPrice) {
      this.productService.add(productName, productPrice, categoryId);
      this.addProduct.reset();
      this.dispatcher.dispatch(new ProductAddedEvent(productName, productPrice, currency, currentProductCount, categoryId))
    }
  }

}
