import {Inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {map, tap} from "rxjs/operators";
import {CategorySelectedEvent} from "../../../../events/src/lib/category-selected.event";
import {APPLICATION_BUS, Dispatcher} from "@cobiro/eda";

@Injectable()
export class ProductsEDAEffects {

  notification$ = createEffect(() => this.actions$.pipe(
      ofType('[Categories] Select'),
      tap(({categoryName}) => {
        return this.dispatcher.dispatch(new CategorySelectedEvent(categoryName))
      }),
      map(_ => ({type: '[Noop]'}))
    )
  );

  constructor(
    private actions$: Actions,
    @Inject(APPLICATION_BUS) private dispatcher: Dispatcher<CategorySelectedEvent>
  ) {}
}
