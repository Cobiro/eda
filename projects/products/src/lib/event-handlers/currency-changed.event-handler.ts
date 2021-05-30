import {Injectable} from "@angular/core";
import {ApplicationEventHandler} from "../../../../application-bus/src/lib/application-event.handler";
import {CurrencyChangedEvent} from "../../../../events/src/lib/currency-changed.event";
import {ProductsService} from "../products.service";

@Injectable()
export class CurrencyChangedEventHandler implements ApplicationEventHandler {
  eventClass = CurrencyChangedEvent;

  constructor(private productsService: ProductsService) {}

  handle(event: CurrencyChangedEvent) {
    this.productsService.setCurrency(event.currencySymbol);
  }
}
