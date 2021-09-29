import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";

export interface Product {
  name: string;
  price: number;
  categoryId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productSubject = new BehaviorSubject<Product[]>([]);
  get products$(): Observable<Product[]> {
    return this.productSubject.asObservable();
  }

  add(name: string, price: number, categoryId: string): void {
    this.productSubject.next([...this.productSubject.getValue(), { name, price, categoryId}]);
  }

  private categoryIdSubject = new ReplaySubject<{ name: string}>(1);
  setCategoryId(categoryId: string): void {
    this.categoryIdSubject.next({ name: categoryId });
  }
  get selectedCategory$(): Observable<{ name: string}> {
    return this.categoryIdSubject.asObservable();
  }

  private currencySubject = new ReplaySubject<string>(1);
  setCurrency(currency: string): void {
    this.currencySubject.next(currency);
  }
  get currency$(): Observable<string> {
    return this.currencySubject.asObservable();
  }
}
