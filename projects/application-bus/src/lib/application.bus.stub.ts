import { DomainEvent } from '@app.cobiro.com/core/events';
import { APPLICATION_BUS, ApplicationBus } from './application.bus';
import { EMPTY } from 'rxjs';

export const APPLICATION_BUS_STUB: ApplicationBus = {
  dispatch: (event: DomainEvent) => {},
  on: eventType => EMPTY,
};

export const APPLICATION_BUS_STUB_PROVIDER = {
  provide: APPLICATION_BUS,
  useValue: APPLICATION_BUS_STUB,
};
