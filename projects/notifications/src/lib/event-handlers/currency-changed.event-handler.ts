import {Injectable} from "@angular/core";
import {ApplicationEventHandler} from "../../../../application-bus/src/lib/application-event.handler";
import {CategorySelectedEvent} from "../../../../events/src/lib/category-selected.event";
import {NotificationsService} from "../notifications.service";
import {CurrencyChangedEvent} from "../../../../events/src/lib/currency-changed.event";

@Injectable()
export class CurrencyChangedEventHandler implements ApplicationEventHandler {
  eventClass = CurrencyChangedEvent;

  constructor(private notifyService: NotificationsService) {}

  handle(event: CurrencyChangedEvent) {
    this.notifyService.notify(`Currency changed to ${event.currencySymbol}`);
  }
}
