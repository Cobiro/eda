// TODO: Move to core module
import {Category} from "../../../../categories/src/lib/categories.service";
import {Action, createReducer, on} from "@ngrx/store";
import * as SelectCategoryActions from './select-category.action';

export interface CategoriesState {
  categories: Category[],
  selectedCategory: string | undefined;
}

export const categoryInitialState: CategoriesState = {
  categories: [
    { name: 'Shoes', productCount: 0 },
    { name: 'Jackets', productCount: 0 }
  ],
  selectedCategory: 'Shoes'
}

const selectCategoryReducer = createReducer(
  categoryInitialState,
  on(SelectCategoryActions.selectCategory, (state, { categoryName }) => ({...state, selectedCategory: categoryName}))
);

export const categoriesFeatureKey = 'categories';

export function reducer(state: CategoriesState | undefined, action: Action) {
  return selectCategoryReducer(state, action);
}
