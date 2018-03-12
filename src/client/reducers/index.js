import { combineReducers } from 'redux';

import movies from './movies';
import user from './user';

const reducer = combineReducers({
  movies,
  user,
});

export default reducer;
