import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from './types';

const initialState = {
  isSnackBarOpen: false,
  message: '',
};

const snackBar = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        isSnackBarOpen: true,
        message: action.payload,
      };
    case HIDE_NOTIFICATION:
      return {
        ...state,
        isSnackBarOpen: false,
        message: '',
      };
    default:
      return state;
  }
};

export default snackBar;
