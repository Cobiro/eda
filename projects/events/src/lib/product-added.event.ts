import {ApplicationEvent} from "@cobiro/eda";

export class ProductAddedEvent extends ApplicationEvent {
  constructor(public readonly name: string, public readonly price: number, public readonly currency: string) {
    super();
  }
}
