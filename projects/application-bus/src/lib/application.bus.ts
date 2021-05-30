import {Injectable, InjectionToken} from '@angular/core';
import {Dispatcher} from './dispatcher';
import {Listener} from './listener';
import {Observable, Subject} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import {AppEvent} from './application.event';

export const APPLICATION_BUS = new InjectionToken<ApplicationBus>('APPLICATION_BUS');

export interface ApplicationBus extends Dispatcher<AppEvent>, Listener<AppEvent> {}

@Injectable()
export class SubjectBasedApplicationEventBus implements ApplicationBus {
  private subject = new Subject<AppEvent>();

  dispatch(event: AppEvent): void {
    this.subject.next(event);
  }

  on(eventType: typeof AppEvent): Observable<AppEvent> {
    return this.subject.asObservable().pipe(
      filter((event: AppEvent) => event && event.isEqual(eventType)),
      map(event => event),
    );
  }
}
