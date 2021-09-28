# Cobiro Event Driven Architectures ( EDA )

This repository contains many examples of usage EDA (**[@cobiro/eda](https://www.npmjs.com/package/@cobiro/eda)**) with Angular and NGRX.

## How to use

Install package

`npm install @cobiro/eda`

Add ApplicationModule and TokenBasedApplicationEventHandlerRegistry to your module
```ts
import {ApplicationBusModule, TokenBasedApplicationEventHandlerRegistry} from "@cobiro/eda";

@NgModule({ 
  declarations: [AppComponent],
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
```

Create ApplicationEvent

```ts
import {ApplicationEvent} from "@cobiro/eda";

export class ProductAddedEvent extends ApplicationEvent {
  constructor(public readonly name: string, public readonly price: number, public readonly currency: string) {
    super();
  }
}
```

Dispatch event in your application

```ts
import {APPLICATION_BUS, Dispatcher} from "@cobiro/eda";
import {ProductAddedEvent} from "./product-added.event";
import {Product} from "./products.service";

export class ProductsComponent {
  constructor(
    @Inject(APPLICATION_BUS) private _applicationBus: Dispatcher<ProductAddedEvent>
  ) {
  }

  onProductAddClicked(product: Product): void {
      this._applicationBus.dispatch(new ProductAddedEvent(product.name, product.price, product.currency));
  }
}
```

Create ApplicationEventHandler and provide it into your module when you want to handle it:

```ts
import {NotificationsService} from "../notifications.service";
import {ProductAddedEvent} from "../../../../events/src/lib/product-added.event";
import {ApplicationEventHandler} from "@cobiro/eda";

@Injectable()
export class ProductAddedEventHandler implements ApplicationEventHandler {
  eventClass = ProductAddedEvent;

  constructor(private notifyService: NotificationsService) {}

  handle(event: ProductAddedEvent) {
    this.notifyService.notify(`Added ${event.name} ${event.currency}${event.price}`);
  }
}

@NgModule({
  ...,
  providers: [
    provideApplicationEventHandler(ProductAddedEventHandler)
  ]
})
export class NotificationsModule { }
```
