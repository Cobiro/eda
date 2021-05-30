import {APPLICATION_BUS, ApplicationBus} from './application.bus';
import {EMPTY} from 'rxjs';
import {AppEvent} from "./application.event";

export const APPLICATION_BUS_STUB: ApplicationBus = {
  dispatch: (event: AppEvent) => {},
  on: eventType => EMPTY,
};

export const APPLICATION_BUS_STUB_PROVIDER = {
  provide: APPLICATION_BUS,
  useValue: APPLICATION_BUS_STUB,
};
