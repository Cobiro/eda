import {Class} from './class';
import {ApplicationEventHandler} from "./application-event.handler";

export abstract class AppEvent {
  abstract handlerClass: Class<ApplicationEventHandler>;

  public isEqual(eventType: typeof AppEvent): boolean {
    return this instanceof eventType;
  }
}
