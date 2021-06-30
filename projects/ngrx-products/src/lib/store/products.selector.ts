import {Product} from "../../../../products/src/lib/products.service";
import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {CategoriesState, categoryInitialState} from "../../../../ngrx-categories/src/lib/store/select-category.reducer";
import {selectSelectedCategory} from "../../../../ngrx-categories/src/lib/store/categories.selector";
import {Category} from "../../../../categories/src/lib/categories.service";
import * as SelectCategoryActions from "../../../../ngrx-categories/src/lib/store/select-category.action";

export const productsFeatureKey = 'products';

export interface ProductsState {
  products: Product[];
}

export const productInitialState: ProductsState = {
  products: [
    { name: 'Leather Shoe', categoryId: 'Shoes', price: 100 },
    { name: 'Leather Jacket', categoryId: 'Jackets', price: 500 }
  ]
}

const productsReducer = createReducer(
  productInitialState,
);

export function reducer(state: ProductsState | undefined, action: Action) {
  return productsReducer(state, action);
}

export const selectProducts = (products: ProductsState) => products.products;
