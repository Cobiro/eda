import {Action, createAction, createReducer, on, props} from "@ngrx/store";
import {Notification} from "../../../../notifications/src/lib/notifications.service";

export const notify = createAction(
  '[Notifications] Notify',
  props<{message: string}>()
);

export interface NotificationState {
  notifications: Notification[];
}

export const notificationsFeatureKey = 'notifications';

// @ts-ignore
export const selectNotifications = (state: object) => (state as any).notifications.notifications;

export const notificationsInitState: NotificationState = {
  notifications: []
}

const notificationsReducer = createReducer(
  notificationsInitState,
  on(notify, (state, props) => ({notifications: state.notifications.concat({text: props.message})}))
);

export function reducer(state: NotificationState, action: Action) {
  return notificationsReducer(state, action);
}
