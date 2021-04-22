import {
  SET_SELECTED_USER_ID,
  UPDATE_USERS_TABLE,
  CLEAR_SELECTED_USER_ID,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
} from 'src/redux/types';

//Users
export const setSelectedUserId = (id) => ({
  type: SET_SELECTED_USER_ID,
  payload: id,
});

export const updateUsersTable = (user) => ({
  type: UPDATE_USERS_TABLE,
  payload: user,
});

export const clearSelectedUserId = () => ({
  type: CLEAR_SELECTED_USER_ID,
});

//SnackBar
export const showNotification = (message) => ({
  type: SHOW_NOTIFICATION,
  payload: message,
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
