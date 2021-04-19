import { SET_SELECTED_USER_ID, UPDATE_USER } from 'src/redux/types';

export const setSelectedUserId = (id) => ({
  type: SET_SELECTED_USER_ID,
  payload: id,
});

export const updateUser = (user) => ({
  type: UPDATE_USER,
  payload: user,
});
