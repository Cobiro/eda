import {Injectable} from "@angular/core";
import {ApplicationEventHandler} from "../../../../application-bus/src/lib/application-event.handler";
import {ProductAddedEvent} from "../../../../events/src/lib/product-added.event";
import {CategoriesService} from "../categories.service";

@Injectable()
export class ProductAddedEventHandler implements ApplicationEventHandler {
  eventClass = ProductAddedEvent;

  constructor(private categoriesService: CategoriesService) {}

  handle(event: ProductAddedEvent) {
    this.categoriesService.setProductCount(event.categoryProductCount + 1, event.categoryName);
  }
}
