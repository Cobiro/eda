import {fakeAsync, tick} from '@angular/core/testing';
import {prepareStrategyTest} from './testing/prepare-strategy-test.spec';
import {ongoingEventsOrchestrationStrategy} from './ongoing-events.orchestration-strategy';

describe('OngoingEventsOrchestrationStrategy', () => {
  it('should trigger the event-orchestrator on given events', fakeAsync(() => {
    const {
      firstEvent,
      secondEvent,
      thirdEvent,
      firstEventSubject,
      secondEventSubject,
      thirdEventSubject,
      callbackSpy,
    } = prepareStrategyTest(ongoingEventsOrchestrationStrategy);
    firstEventSubject.next(firstEvent);
    secondEventSubject.next(secondEvent);
    thirdEventSubject.next(thirdEvent);
    tick();
    expect(callbackSpy).toHaveBeenCalledWith([firstEvent, secondEvent, thirdEvent]);
  }));

  it('should trigger the callback again if one of the events has triggered for the 2nd time', fakeAsync(() => {
    const {
      firstEvent,
      secondEvent,
      thirdEvent,
      firstEventSubject,
      secondEventSubject,
      thirdEventSubject,
      callbackSpy,
    } = prepareStrategyTest(ongoingEventsOrchestrationStrategy);
    firstEventSubject.next(firstEvent);
    secondEventSubject.next(secondEvent);
    thirdEventSubject.next(thirdEvent);
    tick();
    firstEventSubject.next(firstEvent);
    tick();
    expect(callbackSpy).toHaveBeenCalledTimes(2);
  }));
});
