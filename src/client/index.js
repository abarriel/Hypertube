import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import {
  loadGenres,
  loadPreferredMovies,
  loadRecentMovies,
} from './actions/movies';
import {
  getGenres,
  reqMovies,
} from './request';
import App from './pages/App';

const initialState = {};
const store = configureStore(initialState);

const init = () => {
  getGenres()
    .then(data => {
      store.dispatch(loadGenres(data));
    });
};

init();

const Root = () => <Provider store={store}><App /></Provider>;

ReactDOM.render(<Root />, document.getElementById('__HYPERTUBE__'));
