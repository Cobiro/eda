import {Injectable} from "@angular/core";
import {ApplicationEventHandler} from "../../../../application-bus/src/lib/application-event.handler";
import {CategorySelectedEvent} from "../../../../events/src/lib/category-selected.event";
import {NotificationsService} from "../notifications.service";
import {CurrencyChangedEvent} from "../../../../events/src/lib/currency-changed.event";
import {ProductAddedEvent} from "../../../../events/src/lib/product-added.event";

@Injectable()
export class ProductAddedEventHandler implements ApplicationEventHandler {
  eventClass = ProductAddedEvent;

  constructor(private notifyService: NotificationsService) {}

  handle(event: ProductAddedEvent) {
    this.notifyService.notify(`Added ${event.name} ${event.currency}${event.price}`);
  }
}
