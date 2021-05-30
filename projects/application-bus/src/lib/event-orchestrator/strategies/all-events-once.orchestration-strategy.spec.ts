import {allEventsOnceOrchestrationStrategy} from './all-events-once.orchestration-strategy';
import {fakeAsync, tick} from '@angular/core/testing';
import {prepareStrategyTest} from './testing/prepare-strategy-test.spec';

describe('AllEventsOnceOrchestrationStrategy', () => {
  it('should trigger the event-orchestrator on given events', fakeAsync(() => {
    const {
      firstEvent,
      secondEvent,
      thirdEvent,
      firstEventSubject,
      secondEventSubject,
      thirdEventSubject,
      callbackSpy,
    } = prepareStrategyTest(allEventsOnceOrchestrationStrategy);
    firstEventSubject.next(firstEvent);
    secondEventSubject.next(secondEvent);
    thirdEventSubject.next(thirdEvent);
    tick();
    expect(callbackSpy).toHaveBeenCalledWith([firstEvent, secondEvent, thirdEvent]);
  }));

  it('should not trigger the event-orchestrator if not all of the events were triggered', fakeAsync(() => {
    const { firstEvent, firstEventSubject, callbackSpy } = prepareStrategyTest(
      allEventsOnceOrchestrationStrategy,
    );
    firstEventSubject.next(firstEvent);
    tick();
    expect(callbackSpy).not.toHaveBeenCalled();
  }));

  it('should trigger the event-orchestrator only once, even if the events were triggered twice', fakeAsync(() => {
    const {
      firstEvent,
      secondEvent,
      thirdEvent,
      firstEventSubject,
      secondEventSubject,
      thirdEventSubject,
      callbackSpy,
    } = prepareStrategyTest(allEventsOnceOrchestrationStrategy);
    firstEventSubject.next(firstEvent);
    secondEventSubject.next(secondEvent);
    thirdEventSubject.next(thirdEvent);
    tick();
    firstEventSubject.next(firstEvent);
    secondEventSubject.next(secondEvent);
    thirdEventSubject.next(thirdEvent);
    tick();
    expect(callbackSpy).toHaveBeenCalledTimes(1);
  }));
});
