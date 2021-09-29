import {Injectable} from "@angular/core";
import {CategorySelectedEvent} from "../../../../events/src/lib/category-selected.event";
import {ProductsService} from "../products.service";
import {ApplicationEventHandler} from "@cobiro/eda";

@Injectable()
export class CategorySelectedEventHandler implements ApplicationEventHandler {
  eventClass = CategorySelectedEvent;

  constructor(private productsService: ProductsService) {}

  handle(event: CategorySelectedEvent) {
    this.productsService.setCategoryId(event.categoryName)
  }
}
