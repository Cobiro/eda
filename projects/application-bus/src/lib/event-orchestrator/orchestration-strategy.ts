import {Observable, Subscription} from 'rxjs';
import {AppEvent} from "../application.event";

export type OrchestrationStrategyFn = (
  eventObservables: Observable<AppEvent>[],
  callback: (events: AppEvent[]) => void,
) => Subscription;
