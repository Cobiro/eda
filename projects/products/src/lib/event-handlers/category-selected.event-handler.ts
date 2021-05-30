import {Injectable} from "@angular/core";
import {ApplicationEventHandler} from "../../../../application-bus/src/lib/application-event.handler";
import {CategorySelectedEvent} from "../../../../events/src/lib/category-selected.event";
import {ProductsService} from "../products.service";

@Injectable()
export class CategorySelectedEventHandler implements ApplicationEventHandler {
  eventClass = CategorySelectedEvent;

  constructor(private productsService: ProductsService) {}

  handle(event: CategorySelectedEvent) {
    this.productsService.setCategoryId(event.categoryName)
  }
}
