import { OrchestrationStrategyFn } from '../orchestration-strategy';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { DomainEvent } from '@app.cobiro.com/core/events';
import { take } from 'rxjs/operators';

export const allEventsOnceOrchestrationStrategy: OrchestrationStrategyFn = (
  eventObservables: Observable<DomainEvent>[],
  callback: (events: DomainEvent[]) => void,
): Subscription => {
  return forkJoin(
    eventObservables.map(eventObservable => eventObservable.pipe(take(1))),
  ).subscribe(events => callback(events));
};
