import {Class} from '../class';
import {ApplicationEventOrchestrator} from './application-event.orchestrator';
import {APPLICATION_EVENT_ORCHESTRATOR_TOKEN} from './aplication.orchestrator.token';

export const provideApplicationEventOrchestrator = (
  handlerClass: Class<ApplicationEventOrchestrator>,
) => ({
  provide: APPLICATION_EVENT_ORCHESTRATOR_TOKEN,
  useClass: handlerClass,
  multi: true,
});
