import FILLING_STORAGE from './types';

const initialState = {
  articles: []
};

function fillingStorage(state = initialState, action = { type: FILLING_STORAGE }) {
  switch (action.type) {
    case FILLING_STORAGE:
      return {
        articles: action.storeData,
      };
    default: 
      return state;
  }
}

export default fillingStorage;
