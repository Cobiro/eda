export interface Dispatcher<T> {
  dispatch(event: T): void;
}
