import { Class } from '../../class';
import {
  APPLICATION_BUS,
  ApplicationBus,
  ApplicationEventOrchestrator,
  CommandBus,
  provideApplicationEventOrchestrator,
  TokenBasedApplicationEventHandlerRegistry,
} from '@cbr/core';
import { ClassProvider, Provider, ValueProvider } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ApplicationBusModule } from '../application-bus.module';
import { ApplicationBusTestBed, providerInstances } from '../utils';

export const prepareApplicationEventOrchestratorTest = (
  orchestratorClass: Class<ApplicationEventOrchestrator>,
  additionalProviders?: Provider[],
): ApplicationBusTestBed => {
  TestBed.configureTestingModule({
    imports: [ApplicationBusModule.forRoot()],
    providers: [
      provideApplicationEventOrchestrator(orchestratorClass),
      ...(additionalProviders || []),
    ],
  });
  TestBed.inject(TokenBasedApplicationEventHandlerRegistry).init();
  return {
    applicationBus: TestBed.inject(APPLICATION_BUS),
    providerInstances: providerInstances(additionalProviders),
  };
};
