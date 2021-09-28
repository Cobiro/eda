import {Injectable} from "@angular/core";
import {CategorySelectedEvent} from "../../../../events/src/lib/category-selected.event";
import {Store} from "@ngrx/store";
import {notify} from "../store/notifications.selector";
import {ApplicationEventHandler} from "@cobiro/eda";

@Injectable()
export class CategorySelectedEventHandler implements ApplicationEventHandler {
  eventClass = CategorySelectedEvent;

  constructor(private store: Store) {}

  handle(event: CategorySelectedEvent) {
    this.store.dispatch(notify({notification: {text: `Selected ${event.categoryName}`}}));
  }
}
