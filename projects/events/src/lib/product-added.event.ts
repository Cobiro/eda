import {AppEvent} from "../../../application-bus/src/lib/application.event";

export class ProductAddedEvent extends AppEvent {
  constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly currency: string,
    public readonly categoryProductCount: number,
    public readonly categoryName: string
  ) {
    super();
  }
}
