import {ClassProvider, Provider, ValueProvider} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {ApplicationBus} from "./application.bus";

export const providerInstances = (additionalProviders: Provider[] = []): Map<any, any> => {
  return new Map(
    additionalProviders.map((provider: ValueProvider | ClassProvider) =>
      provider.provide
        ? [provider.provide, TestBed.inject(provider.provide)]
        : [provider, TestBed.inject(provider as any)],
    ),
  );
};

export interface ApplicationBusTestBed {
  applicationBus: ApplicationBus;
  providerInstances: Map<any, any>;
}
