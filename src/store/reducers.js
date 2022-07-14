import { combineReducers } from '@reduxjs/toolkit';
import refreshUsers from './users/reducers';
import translate from './translations/reducers';
import fillingStorage from './articles/reducers';

const rootReducer = combineReducers({
  users: refreshUsers,
  translates: translate,
  articles: fillingStorage,
});

export default rootReducer;
