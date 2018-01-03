import {
  LOAD_MOVIES,
  UPDATE_SEARCH_MOVIES,
  UPDATE_FILTER_MOVIES,
} from '../actions/movies';

const initialState = {
  data: [],
  count: 0,
  sort: { by: 'name', order: 'ASC' },
  search: '',
  filter: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MOVIES: {
      return { ...state, data: action.data.movies, count: action.data.count };
    }
    case UPDATE_SEARCH_MOVIES: {
      return { ...state, search: action.value };
    }
    case UPDATE_FILTER_MOVIES: {
      return { ...state, filter: [...state.filter, action.filter] };
    }
    default:
      return state;
  }
};

export default reducer;
