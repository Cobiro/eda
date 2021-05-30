import {Class} from './class';
import {AppEvent} from './application.event';

export interface ApplicationEventHandler {
  eventClass: Class<AppEvent>;
  handle(event: AppEvent): void;
}
