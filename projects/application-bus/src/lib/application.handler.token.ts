import {InjectionToken} from '@angular/core';
import {ApplicationEventHandler} from './application-event.handler';

export const APPLICATION_EVENT_HANDLER_TOKEN = new InjectionToken<ApplicationEventHandler[]>(
  'APPLICATION_EVENT_HANDLER',
);
