import {DomainEvent} from '@app.cobiro.com/core/events';

export class FirstEventStub extends DomainEvent {}

export class SecondEventStub extends DomainEvent {
  constructor(public readonly foo: string) {
    super();
  }
}

export class ThirdEventStub extends DomainEvent {
  constructor(public readonly bar: string) {
    super();
  }
}
