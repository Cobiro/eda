import {InjectionToken} from '@angular/core';
import {ApplicationEventOrchestrator} from './application-event.orchestrator';

export const APPLICATION_EVENT_ORCHESTRATOR_TOKEN = new InjectionToken<
  ApplicationEventOrchestrator[]
>('APPLICATION_EVENT_ORCHESTRATOR_TOKEN');
