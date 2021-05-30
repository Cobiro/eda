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
  styles: [
  ]
})
export class SettingsComponent {

  public currencies$ = this.settings.currencies$;
  public selectedCurrency$ = this.settings.selectedCurrency$;

  constructor(private notifier: NotificationsService, private settings: SettingsService) { }

  onCurrencyChange(currency: CURRENCY_SYMBOL) {
    this.notifier.notify(`Currency changed to ${currency}`);
    this.settings.changeCurrency(currency);
  }
}
