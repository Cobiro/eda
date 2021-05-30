export abstract class AppEvent {
  public isEqual(eventType: typeof AppEvent): boolean {
    return this instanceof eventType;
  }
}
