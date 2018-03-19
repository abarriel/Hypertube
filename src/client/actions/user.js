export const LOAD_USER = 'LOAD_USER';
export const UPDATE_USER_LIST = 'UPDATE_USER_LIST';

export const loadUser = data => ({ type: LOAD_USER, data });

export const updateUserList = newList => ({ type: UPDATE_USER_LIST, newList });
