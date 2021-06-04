import {Component, Inject} from '@angular/core';
import {CURRENCY_SYMBOL, SettingsService} from "./settings.service";
import {APPLICATION_BUS} from "../../../application-bus/src/lib/application.bus";
import {Dispatcher} from "../../../application-bus/src/lib/dispatcher";
import {AppEvent} from "../../../application-bus/src/lib/application.event";
import {CurrencyChangedEvent} from "../../../events/src/lib/currency-changed.event";
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";

@Component({
  selector: 'lib-eda-settings',
  templateUrl: 'settings.component.html',
})
export class EDASettingsComponent {

  public currencies$ = this.settings.currencies$;
  public selectedCurrency$ = this.settings.selectedCurrency$;

  constructor(
    private settings: SettingsService,
    @Inject(APPLICATION_BUS) private dispatcher: Dispatcher<CurrencyChangedEvent>
  ) {
    this.onCurrencyChange(CURRENCY_SYMBOL.USD);
  }

  onCurrencyChange(currency: CURRENCY_SYMBOL) {
    this.settings.changeCurrency(currency);
    this.dispatcher.dispatch(new CurrencyChangedEvent(currency));
  }
}
