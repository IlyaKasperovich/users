import usersList from 'src/mocks/usersList';
import { SET_SELECTED_USER_ID, UPDATE_USER } from './types';

const initState = {
  usersList,
  selectedUserId: null,
};

const users = (state = initState, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_USER_ID:
      return {
        ...state,
        selectedUserId: payload,
      };
    case UPDATE_USER:
      const userIndex = state.usersList.findIndex((item) => item.id === payload.id);
      const newUsersList = [...state.usersList];
      newUsersList[userIndex] = payload;
      return {
        ...state,
        usersList: newUsersList,
      };
    default:
      return state;
  }
};

export default users;
