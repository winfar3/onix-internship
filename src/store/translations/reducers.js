import TOGGLE_LOCALE from './types';

const initialState = {
  locale: null,
};

function translate(state = initialState, action = { type: TOGGLE_LOCALE }) {
  switch (action.type) {
    case TOGGLE_LOCALE:
      return {
        locale: action.locale,
      };
    default:
      return state;
  }
}

export default translate;
