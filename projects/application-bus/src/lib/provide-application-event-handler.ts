import {Class} from './class';
import {ApplicationEventHandler} from './application-event.handler';
import {APPLICATION_EVENT_HANDLER_TOKEN} from './application.handler.token';

export const provideApplicationEventHandler = (handlerClass: Class<ApplicationEventHandler>) => ({
  provide: APPLICATION_EVENT_HANDLER_TOKEN,
  useClass: handlerClass,
  multi: true,
});
