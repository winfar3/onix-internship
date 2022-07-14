import { combineReducers } from '@reduxjs/toolkit';
import refreshUsers from './users/reducers';
import translate from './translations/reducers';

const rootReducer = combineReducers({
  users: refreshUsers,
  translates: translate,
});

export default rootReducer;
