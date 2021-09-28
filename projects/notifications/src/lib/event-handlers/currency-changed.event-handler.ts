import {Injectable} from "@angular/core";
import {NotificationsService} from "../notifications.service";
import {CurrencyChangedEvent} from "../../../../events/src/lib/currency-changed.event";
import {ApplicationEventHandler} from "@cobiro/eda";

@Injectable()
export class CurrencyChangedEventHandler implements ApplicationEventHandler {
  eventClass = CurrencyChangedEvent;

  constructor(private notifyService: NotificationsService) {}

  handle(event: CurrencyChangedEvent) {
    this.notifyService.notify(`Currency changed to ${event.currencySymbol}`);
  }
}
