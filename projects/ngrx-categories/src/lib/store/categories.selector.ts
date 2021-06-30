import {CategoriesState} from "./select-category.reducer";

export const selectCategories = (state: object) => (state as any).categories;

export const selectSelectedCategory = (state: CategoriesState) => state.selectedCategory;
