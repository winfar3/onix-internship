import USERS_HANDLER from './types';

const usersHandler = (usersData) => ({ type: USERS_HANDLER, data: usersData });

export default usersHandler;
