import {AppEvent} from "../../../application-bus/src/lib/application.event";

export class CategorySelectedEvent extends AppEvent {
  constructor(public readonly categoryName: string) {
    super();
  }
}
