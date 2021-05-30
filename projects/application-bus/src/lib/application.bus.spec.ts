import {TestBed} from '@angular/core/testing';
import {APPLICATION_BUS, ApplicationBus, SubjectBasedApplicationEventBus,} from './application.bus';
import {APPLICATION_EVENT_HANDLER_TOKEN} from './application.handler.token';
import {AppEvent} from "./application.event";

describe('ApplicationBus', () => {
  let bus: ApplicationBus;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: APPLICATION_BUS, useClass: SubjectBasedApplicationEventBus },
        { provide: APPLICATION_EVENT_HANDLER_TOKEN, useClass: StubCommandHandler, multi: true },
      ],
    });
    bus = TestBed.inject(APPLICATION_BUS);
  });

  it('should trigger the stream if a given event was dispatched', done => {
    class TestEvent extends AppEvent {
      constructor(public payload = { foo: 'bar' }) {
        super();
      }
    }
    bus.on(TestEvent).subscribe(event => {
      expect(event.payload).toEqual({ foo: 'bar' });
      done();
    });
    bus.dispatch(new TestEvent());
  });
});
