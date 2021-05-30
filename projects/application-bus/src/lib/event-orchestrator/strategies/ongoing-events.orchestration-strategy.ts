import {OrchestrationStrategyFn} from '../orchestration-strategy';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {DomainEvent} from '@app.cobiro.com/core/events';

export const ongoingEventsOrchestrationStrategy: OrchestrationStrategyFn = (
  eventObservables: Observable<DomainEvent>[],
  callback: (events: DomainEvent[]) => void,
): Subscription => {
  return combineLatest(eventObservables).subscribe(events => callback(events));
};
