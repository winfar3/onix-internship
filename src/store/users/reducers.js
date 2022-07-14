import USERS_HANDLER from './types';

const initialState = {
  users: []
};

const refreshUsers = (state = initialState, action = { type: USERS_HANDLER }) => {
  switch (action.type) {
    case USERS_HANDLER: 
      return {
        ...state,
        users: action.storeData
      };
    default:
      return state;
  }
};

export default refreshUsers;
