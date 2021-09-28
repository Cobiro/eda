import {ApplicationEvent} from "@cobiro/eda";

export class CategorySelectedEvent extends ApplicationEvent {
  constructor(public readonly categoryName: string) {
    super();
  }
}
