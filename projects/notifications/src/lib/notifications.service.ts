import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export interface Notification {
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private subject = new BehaviorSubject<Notification[]>([]);

  public notify(text: string): void {
    this.subject.next([...this.subject.getValue(), { text }]);
  }

  get data$(): Observable<Notification[]> {
    return this.subject.asObservable();
  }
}
