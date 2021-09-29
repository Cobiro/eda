import {Injectable} from '@angular/core';
import {Observable, of, ReplaySubject} from "rxjs";

export enum CURRENCY_SYMBOL {
  USD = '$',
  EUR = '€',
  GBR = '£'
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private selectedCurrency = new ReplaySubject<CURRENCY_SYMBOL>(1);

  changeCurrency(currency: CURRENCY_SYMBOL): void {
    this.selectedCurrency.next(currency);
  }

  get selectedCurrency$(): Observable<CURRENCY_SYMBOL> {
    return this.selectedCurrency.asObservable();
  }

  get currencies$(): Observable<CURRENCY_SYMBOL[]> {
    return of([CURRENCY_SYMBOL.USD, CURRENCY_SYMBOL.EUR, CURRENCY_SYMBOL.GBR]);
  }
}
