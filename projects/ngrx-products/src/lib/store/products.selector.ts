import {Product} from "../../../../products/src/lib/products.service";
import {Action, createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import * as SelectCategoryActions from "./select-category.action";

export const productsFeatureKey = 'products';

export interface ProductsState {
  products: Product[];
  selectedCategory: string;
}

export const productInitialState: ProductsState = {
  products: [
    { name: 'Leather Shoe', categoryId: 'Shoes', price: 100 },
    { name: 'Leather Jacket', categoryId: 'Jackets', price: 500 },
  ],
  selectedCategory: 'Shoes'
}

const productsReducer = createReducer(
  productInitialState,
  on(SelectCategoryActions.selectCategory, (state, { categoryName }) => ({...state, selectedCategory: categoryName}))
);

export function reducer(state: ProductsState | undefined, action: Action) {
  return productsReducer(state, action)
}

export const selectProducts = (state: ProductsState) => state.products;
