import TOGGLE_LOCALE from './types';

const toggleLocaleAction = (value) => ({ type: TOGGLE_LOCALE, locale: value });

export default toggleLocaleAction;
