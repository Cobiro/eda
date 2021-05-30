import {ModuleWithProviders, NgModule} from '@angular/core';
import {APPLICATION_BUS, SubjectBasedApplicationEventBus} from './application.bus';
import {TokenBasedApplicationEventHandlerRegistry} from './token-based-application-event-handler.registry';

@NgModule({
  providers: [TokenBasedApplicationEventHandlerRegistry],
})
export class ApplicationBusModule {
  static forRoot(): ModuleWithProviders<ApplicationBusModule> {
    return {
      ngModule: ApplicationBusModule,
      providers: [
        {
          provide: APPLICATION_BUS,
          useClass: SubjectBasedApplicationEventBus,
        },
      ],
    };
  }
}
