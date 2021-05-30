import { FirstEventStub, SecondEventStub, ThirdEventStub } from './events.stub';
import { ReplaySubject } from 'rxjs';
import Spy = jasmine.Spy;
import { OrchestrationStrategyFn } from '../../orchestration-strategy';

export const prepareStrategyTest = (
  strategy: OrchestrationStrategyFn,
): {
  firstEvent: FirstEventStub;
  secondEvent: SecondEventStub;
  thirdEvent: ThirdEventStub;
  firstEventSubject: ReplaySubject<FirstEventStub>;
  secondEventSubject: ReplaySubject<SecondEventStub>;
  thirdEventSubject: ReplaySubject<ThirdEventStub>;
  callbackSpy: Spy;
} => {
  const firstEvent = new FirstEventStub();
  const secondEvent = new SecondEventStub('__SECOND_EVENT__');
  const thirdEvent = new ThirdEventStub('__THIRD_EVENT__');
  const firstEventSubject = new ReplaySubject<FirstEventStub>();
  const secondEventSubject = new ReplaySubject<SecondEventStub>();
  const thirdEventSubject = new ReplaySubject<ThirdEventStub>();
  const callbackSpy = jasmine.createSpy();

  strategy(
    [
      firstEventSubject.asObservable(),
      secondEventSubject.asObservable(),
      thirdEventSubject.asObservable(),
    ],
    callbackSpy,
  );

  return {
    firstEvent,
    secondEvent,
    thirdEvent,
    firstEventSubject,
    secondEventSubject,
    thirdEventSubject,
    callbackSpy,
  };
};
