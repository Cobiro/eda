import {Injectable} from "@angular/core";
import {CategorySelectedEvent} from "../../../../events/src/lib/category-selected.event";
import {NotificationsService} from "../notifications.service";
import {ApplicationEventHandler} from "@cobiro/eda";

@Injectable()
export class CategorySelectedEventHandler implements ApplicationEventHandler {
  eventClass = CategorySelectedEvent;

  constructor(private notifyService: NotificationsService) {}

  handle(event: CategorySelectedEvent) {
    this.notifyService.notify(`Selected ${event.categoryName}`);
  }
}
