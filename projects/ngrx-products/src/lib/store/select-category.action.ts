import {createAction, props} from "@ngrx/store";

export const selectCategory = createAction(
  '[Categories] Select',
  props<{ categoryName: string }>()
);
