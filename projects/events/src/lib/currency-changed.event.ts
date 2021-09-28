import {ApplicationEvent} from "@cobiro/eda";

export class CurrencyChangedEvent extends ApplicationEvent {
  constructor(public readonly currencySymbol: string) {
    super();
  }
}
