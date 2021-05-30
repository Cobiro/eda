import {OrchestrationStrategyFn} from '../orchestration-strategy';
import {Observable, Subscription, zip} from 'rxjs';
import {DomainEvent} from '@app.cobiro.com/core/events';

export const zipEventsOrchestrationStrategy: OrchestrationStrategyFn = (
  eventObservables: Observable<DomainEvent>[],
  callback: (events: DomainEvent[]) => void,
): Subscription => {
  return zip(...eventObservables).subscribe(callback);
};
