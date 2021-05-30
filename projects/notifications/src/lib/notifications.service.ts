import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

export interface Notifiction {
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private subject = new BehaviorSubject<Notifiction[]>([]);

  public notify(text: string): void {
    this.subject.next([...this.subject.getValue(), { text }]);
  }

  get data$(): Observable<Notifiction[]> {
    return this.subject.asObservable();
  }
}
