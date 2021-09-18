// TODO: Move to core module
import {Category} from "../../../../categories/src/lib/categories.service";
import {Action, createReducer, on} from "@ngrx/store";

export interface CategoriesState {
  categories: Category[],
}

export const categoryInitialState: CategoriesState = {
  categories: [
    { name: 'Shoes', productCount: 0 },
    { name: 'Jackets', productCount: 0 }
  ]
}

const selectCategoryReducer = createReducer(
  categoryInitialState,
);

export const categoriesFeatureKey = 'categories';

export function reducer(state: CategoriesState | undefined, action: Action) {
  return selectCategoryReducer(state, action);
}
