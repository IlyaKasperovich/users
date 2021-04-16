import usersList from 'src/mocks/usersList';
import { SET_USERS } from './types';

const initState = {
  usersList,
};

const users = (state = initState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        usersList: action.payload,
      };
    default:
      return state;
  }
};

export default users;
