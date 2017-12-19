import { combineReducers } from 'redux';

import movies from './movies';

const reducer = combineReducers({
  movies,
});

export default reducer;
