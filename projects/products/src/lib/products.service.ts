import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

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

  add(name: string, price: number, categoryId: string): void {
    this.productSubject.next([...this.productSubject.getValue(), { name, price, categoryId}]);
  }

  get products$(): Observable<Product[]> {
    return this.productSubject.asObservable();
  }
}
