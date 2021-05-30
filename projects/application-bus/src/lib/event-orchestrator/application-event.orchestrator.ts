import {Class} from '../class';
import {OrchestrationStrategyFn} from './orchestration-strategy';
import {AppEvent} from "../application.event";

export interface ApplicationEventOrchestrator {
  eventsClasses: Class<AppEvent>[];
  strategy: OrchestrationStrategyFn;
  orchestrate(events: AppEvent[]): void;
}
