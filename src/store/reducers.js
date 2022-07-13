import { combineReducers } from '@reduxjs/toolkit';
import refreshUsers from './users/reducers';

const rootReducer = combineReducers({
  users: refreshUsers
});

export default rootReducer;
