import {Injectable} from "@angular/core";
import {ApplicationEventHandler} from "../../../../application-bus/src/lib/application-event.handler";
import {CategorySelectedEvent} from "../../../../events/src/lib/category-selected.event";
import {NotificationsService} from "../notifications.service";

@Injectable()
export class CategorySelectedEventHandler implements ApplicationEventHandler {
  eventClass = CategorySelectedEvent;

  constructor(private notifyService: NotificationsService) {}

  handle(event: CategorySelectedEvent) {
    this.notifyService.notify(`Selected ${event.categoryName}`);
  }
}
