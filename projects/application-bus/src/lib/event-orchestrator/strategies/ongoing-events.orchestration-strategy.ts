import {OrchestrationStrategyFn} from '../orchestration-strategy';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {AppEvent} from "../../application.event";

export const ongoingEventsOrchestrationStrategy: OrchestrationStrategyFn = (
  eventObservables: Observable<AppEvent>[],
  callback: (events: AppEvent[]) => void,
): Subscription => {
  return combineLatest(eventObservables).subscribe(events => callback(events));
};
