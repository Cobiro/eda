import {Category} from "../../../../categories/src/lib/categories.service";
import {Action, createReducer} from "@ngrx/store";

export interface CategoriesState {
  categories: Category[],
}

export const categoryInitialState: CategoriesState = {
  categories: [
    { name: 'Shoes', productCount: 2 },
    { name: 'Jackets', productCount: 1 }
  ]
}

const selectCategoryReducer = createReducer(
  categoryInitialState
);

export const selectCategories = (state: object) => (state as any).categories;

export const categoriesFeatureKey = 'categories';

export function reducer(state: CategoriesState | undefined, action: Action) {
  return selectCategoryReducer(state, action);
}
