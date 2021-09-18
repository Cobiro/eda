import {Action, createAction, createReducer, on, props} from "@ngrx/store";
import {Notifiction} from "../../../../notifications/src/lib/notifications.service";

export const notificationFeatureKey = 'notifications';

export const notify = createAction(
  '[Notifications] notify',
  props<{notification: Notifiction}>()
);

export interface NotificationsState {
  notifications: Notifiction[];
}

export const notificationInitialState: NotificationsState = {
  notifications: []
}

const notificationReducer = createReducer(
  notificationInitialState,
  on(notify, (state, {notification}) => ({ notifications: [...state.notifications, notification ]})),
);

export function reducer(state: NotificationsState | undefined, action: Action) {
  return notificationReducer(state, action);
}

export const selectNotifications = (notification: NotificationsState) => notification.notifications;
