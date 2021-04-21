import { combineReducers } from 'redux';
import users from './users';
import snackBar from './snackBar';

const rootReducer = combineReducers({
  users,
  snackBar,
});

export default rootReducer;
