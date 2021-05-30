import {Class} from './class';
import {TestBed} from '@angular/core/testing';
import {ApplicationBusModule} from './application-bus.module';
import {Provider} from '@angular/core';
import {ApplicationBusTestBed, providerInstances} from './utils';
import {ApplicationEventHandler} from "./application-event.handler";
import {provideApplicationEventHandler} from "./provide-application-event-handler";
import {TokenBasedApplicationEventHandlerRegistry} from "./token-based-application-event-handler.registry";
import {APPLICATION_BUS} from "./application.bus";

export const prepareApplicationEventHandlerTest = (
  handlerClass: Class<ApplicationEventHandler>,
  additionalProviders?: Provider[],
): ApplicationBusTestBed => {
  TestBed.configureTestingModule({
    imports: [ApplicationBusModule.forRoot()],
    providers: [
      provideApplicationEventHandler(handlerClass),
      ...(additionalProviders || []),
    ],
  });
  TestBed.inject(TokenBasedApplicationEventHandlerRegistry).init();
  return {
    applicationBus: TestBed.inject(APPLICATION_BUS),
    providerInstances: providerInstances(additionalProviders),
  };
};
