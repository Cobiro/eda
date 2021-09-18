import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map} from 'rxjs/operators';
import {notify} from "../../../../ngrx-notifications/src/lib/store/notifications.selector";

@Injectable()
export class ProductsEffects {

  notification$ = createEffect(() => this.actions$.pipe(
      ofType('[Categories] Select'),
      map(({categoryName}) => {
        return notify({notification: {text: `Category ${categoryName} selected`}})
      })
    )
  );

  constructor(
    private actions$: Actions,
  ) {}
}
