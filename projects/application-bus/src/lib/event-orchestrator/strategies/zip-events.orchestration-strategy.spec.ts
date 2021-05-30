import {prepareStrategyTest} from './testing/prepare-strategy-test.spec';
import {fakeAsync, tick} from '@angular/core/testing';
import {zipEventsOrchestrationStrategy} from './zip-events.orchestration-strategy';

describe('ZipEventsOrchestrationStrategy', () => {
  it('should trigger the zipped events', fakeAsync(() => {
    const {
      firstEvent,
      secondEvent,
      thirdEvent,
      firstEventSubject,
      secondEventSubject,
      thirdEventSubject,
      callbackSpy,
    } = prepareStrategyTest(zipEventsOrchestrationStrategy);
    firstEventSubject.next(firstEvent);
    firstEventSubject.next(firstEvent);
    secondEventSubject.next(secondEvent);
    thirdEventSubject.next(thirdEvent);
    tick();
    expect(callbackSpy).toHaveBeenCalledWith([firstEvent, secondEvent, thirdEvent]);
    expect(callbackSpy).toHaveBeenCalledTimes(1);
  }));
});
