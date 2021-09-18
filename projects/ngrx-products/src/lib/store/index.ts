import {Product} from "../../../../products/src/lib/products.service";
import {Action, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import {createAction, props} from "@ngrx/store";

export const selectCategory = createAction(
  '[Products] Select',
  props<{ categoryName: string }>()
);

export const productsFeatureKey = 'products';

export interface ProductsState {
  products: Product[];
  selectedCategory: string;
}

export const productInitialState: ProductsState = {
  products: [
    { name: 'Leather Shoes', categoryId: 'Shoes', price: 100 },
    { name: 'Running Shoes', categoryId: 'Shoes', price: 50 },
    { name: 'Leather Jacket', categoryId: 'Jackets', price: 500 }
  ],
  selectedCategory: 'Shoes'
}

const productsReducer = createReducer(
  productInitialState,
  on(selectCategory, (state, props) => ({...state, selectedCategory: props.categoryName}))
);

export function reducer(state: ProductsState, action: Action) {
  return productsReducer(state, action);
}

export const selectProducts = (products: { products: ProductsState }) => products.products.products.filter(product => product.categoryId === products.products.selectedCategory);
export const selectSelectedCategory = (products: { products: ProductsState }) => products.products.selectedCategory;
