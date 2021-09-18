import {Injectable} from "@angular/core";
import {ApplicationEventHandler} from "../../../../application-bus/src/lib/application-event.handler";
import {CategorySelectedEvent} from "../../../../events/src/lib/category-selected.event";
import {Store} from "@ngrx/store";
import {notify} from "../store/notifications.selector";

@Injectable()
export class CategorySelectedEventHandler implements ApplicationEventHandler {
  eventClass = CategorySelectedEvent;

  constructor(private store: Store) {}

  handle(event: CategorySelectedEvent) {
    this.store.dispatch(notify({notification: {text: `Selected ${event.categoryName}`}}));
  }
}
