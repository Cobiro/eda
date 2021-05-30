import {
  APPLICATION_BUS,
  APPLICATION_EVENT_HANDLER_TOKEN,
  APPLICATION_EVENT_ORCHESTRATOR_TOKEN,
  ApplicationBus,
  ApplicationEventHandler,
  ApplicationEventOrchestrator,
  TokenBasedApplicationEventHandlerRegistry,
} from '@cbr/core';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {SubjectBasedApplicationEventBus} from './application.bus';
import {combineLatest, Observable} from 'rxjs';
import {OrchestrationStrategyFn} from './event-orchestrator/orchestration-strategy';
import {DomainEvent} from '@app.cobiro.com/core/events';

class TestEvent extends DomainEvent {}

class SecondTestEvent extends DomainEvent {
  constructor(public readonly data: string) {
    super();
  }
}

class TestHandlerClass implements ApplicationEventHandler {
  eventClass = TestEvent;
  handle(event: TestEvent) {}
}

const testStrategy: OrchestrationStrategyFn = (
  eventObservables: Observable<DomainEvent>[],
  callback: (events: DomainEvent[]) => void,
) => {
  return combineLatest(eventObservables).subscribe(callback);
};

class TestOrchestratorClass implements ApplicationEventOrchestrator {
  eventsClasses = [TestEvent, SecondTestEvent];
  strategy = testStrategy;
  orchestrate(events: DomainEvent[]) {}
}

describe('TokenBasedApplicationEventHandlerRegistry', () => {
  let registry: TokenBasedApplicationEventHandlerRegistry;
  let handler: TestHandlerClass;
  let orchestrator: ApplicationEventOrchestrator;
  let applicationBus: ApplicationBus;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TokenBasedApplicationEventHandlerRegistry,
        { provide: APPLICATION_EVENT_HANDLER_TOKEN, useClass: TestHandlerClass, multi: true },
        {
          provide: APPLICATION_EVENT_ORCHESTRATOR_TOKEN,
          useClass: TestOrchestratorClass,
          multi: true,
        },
        { provide: APPLICATION_BUS, useClass: SubjectBasedApplicationEventBus },
      ],
    });
    registry = TestBed.inject(TokenBasedApplicationEventHandlerRegistry);
    handler = TestBed.inject(APPLICATION_EVENT_HANDLER_TOKEN)[0];
    orchestrator = TestBed.inject(APPLICATION_EVENT_ORCHESTRATOR_TOKEN)[0];
    applicationBus = TestBed.inject(APPLICATION_BUS);
  });

  it('should trigger the handler on given event', fakeAsync(() => {
    spyOn(handler, 'handle');

    registry.init();
    applicationBus.dispatch(new TestEvent());
    tick();

    expect(handler.handle).toHaveBeenCalled();
  }));

  it('should handle orchestration when both events trigger', fakeAsync(() => {
    const testEvent = new TestEvent();
    const secondTestEvent = new SecondTestEvent('foo');
    spyOn(orchestrator, 'orchestrate');
    registry.init();
    applicationBus.dispatch(testEvent);
    applicationBus.dispatch(secondTestEvent);
    tick();
    expect(orchestrator.orchestrate).toHaveBeenCalledWith([testEvent, secondTestEvent]);
  }));
});
