import {Component} from '@angular/core';
import {CURRENCY_SYMBOL, SettingsService} from "./settings.service";
import {NotificationsService} from "../../../notifications/src/lib/notifications.service";

@Component({
  selector: 'lib-settings',
  template: `
    <h2>Currency settings</h2>
    <mat-button-toggle-group [value]="selectedCurrency$ | async" (change)="onCurrencyChange($event.value)">
      <mat-button-toggle [value]="currency" *ngFor="let currency of currencies$ | async">{{currency}}</mat-button-toggle>
    </mat-button-toggle-group>
  `,
})
export class SettingsComponent {

  public currencies$ = this.settings.currencies$;
  public selectedCurrency$ = this.settings.selectedCurrency$;

  constructor(
    private settings: SettingsService,
    private notifier: NotificationsService
  ) {
    this.settings.changeCurrency(CURRENCY_SYMBOL.USD);
  }

  onCurrencyChange(currency: CURRENCY_SYMBOL) {
    this.settings.changeCurrency(currency);
    this.notifier.notify(`Currency changed to ${currency}`);
  }
}
