import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from "@ngrx/store";
import {AppRoutingModule} from "./app.routing";
import {StandardModule} from "../pages/standard/standard.module";
import {NgrxModule} from "../pages/ngrx/ngrx.module";
import {EffectsModule} from "@ngrx/effects";
import {ApplicationBusModule, TokenBasedApplicationEventHandlerRegistry} from "@cobiro/eda";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApplicationBusModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    AppRoutingModule,
    StandardModule,
    NgrxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private registry: TokenBasedApplicationEventHandlerRegistry) {
    this.registry.init();
  }
}
