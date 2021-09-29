import {Injectable} from "@angular/core";
import {NotificationsService} from "../notifications.service";
import {ProductAddedEvent} from "../../../../events/src/lib/product-added.event";
import {ApplicationEventHandler} from "@cobiro/eda";

@Injectable()
export class ProductAddedEventHandler implements ApplicationEventHandler {
  eventClass = ProductAddedEvent;

  constructor(private notifyService: NotificationsService) {}

  handle(event: ProductAddedEvent) {
    this.notifyService.notify(`Added ${event.name} ${event.currency}${event.price}`);
  }
}
