import {OrchestrationStrategyFn} from '../orchestration-strategy';
import {forkJoin, Observable, Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {AppEvent} from "../../application.event";

export const allEventsOnceOrchestrationStrategy: OrchestrationStrategyFn = (
  eventObservables: Observable<AppEvent>[],
  callback: (events: AppEvent[]) => void,
): Subscription => {
  return forkJoin(
    eventObservables.map(eventObservable => eventObservable.pipe(take(1))),
  ).subscribe(events => callback(events));
};
