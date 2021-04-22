import usersList from 'src/mocks/usersList';
import {
  SET_SELECTED_USER_ID,
  UPDATE_USERS_TABLE,
  CLEAR_SELECTED_USER_ID,
} from './types';

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
    case UPDATE_USERS_TABLE:
      const userIndex = state.usersList.findIndex((item) => item.id === payload.id);
      let newUsersList = [...state.usersList];
      if (userIndex !== -1) {
        newUsersList[userIndex] = payload;
      } else {
        newUsersList = [...state.usersList, payload];
      }

      return {
        ...state,
        usersList: newUsersList,
      };
    case CLEAR_SELECTED_USER_ID:
      return {
        ...state,
        selectedUserId: null,
      };
    default:
      return state;
  }
};

export default users;
