import {AppEvent} from "../../../application-bus/src/lib/application.event";

export class CurrencyChangedEvent extends AppEvent {
  constructor(public readonly currencySymbol: string) {
    super();
  }
}
