import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from "rxjs";

export interface Category {
  name: string;
  productCount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesSubject = new BehaviorSubject<Category[]>([
    { name: 'Shoes', productCount: 0},
    { name: 'Jackets', productCount: 0}
  ]);
  private selectedCategorySubject = new ReplaySubject<Category>(1);

  get categories$(): Observable<Category[]> {
    return this.categoriesSubject.asObservable();
  }

  get selectedCategory$(): Observable<Category> {
    return this.selectedCategorySubject.asObservable();
  }

  select(categoryName: string) {
    const category = this.categoriesSubject.getValue().find(category => category.name === categoryName);
    if (category) {
      this.selectedCategorySubject.next(category);
    }
  }

  setProductCount(productCount: number, categoryName: string) {
    this.categoriesSubject.next(this.categoriesSubject.getValue().map(category => category.name === categoryName ? {...category, productCount} : category));
  }
}
