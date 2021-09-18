import {Injectable} from "@angular/core";
import {ApplicationEventHandler} from "../../../../application-bus/src/lib/application-event.handler";
import {ProductAddedEvent} from "../../../../events/src/lib/product-added.event";
import {notify} from "../store/notifications.selector";
import {Store} from "@ngrx/store";

@Injectable()
export class ProductAddedEventHandler implements ApplicationEventHandler {
  eventClass = ProductAddedEvent;

  constructor(private store: Store) {}

  handle(event: ProductAddedEvent) {
    this.store.dispatch(notify({notification: {text: `Added ${event.name} ${event.currency}${event.price}`}}));
  }
}
