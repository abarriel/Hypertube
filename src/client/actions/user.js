export const LOAD_USER = 'LOAD_USER';
export const UPDATE_USER_LIST = 'UPDATE_USER_LIST';
export const UPDATE_USER_LANGUAGE = 'UPDATE_USER_LANGUAGE';

export const loadUser = data => ({ type: LOAD_USER, data });

export const updateUserList = newList => ({ type: UPDATE_USER_LIST, newList });

export const updateUserLanguage = newLang => ({ type: UPDATE_USER_LANGUAGE, newLang })