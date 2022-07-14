import USERS_HANDLER from './types';

const usersHandler = (usersData) => ({ type: USERS_HANDLER, storeData: usersData });

export default usersHandler;
