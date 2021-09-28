import {Injectable} from "@angular/core";
import {CurrencyChangedEvent} from "../../../../events/src/lib/currency-changed.event";
import {ProductsService} from "../products.service";
import {ApplicationEventHandler} from "@cobiro/eda";

@Injectable()
export class CurrencyChangedEventHandler implements ApplicationEventHandler {
  eventClass = CurrencyChangedEvent;

  constructor(private productsService: ProductsService) {}

  handle(event: CurrencyChangedEvent) {
    this.productsService.setCurrency(event.currencySymbol);
  }
}
