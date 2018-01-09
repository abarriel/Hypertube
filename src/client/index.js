import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import { loadGenres } from './actions/movies';
import { getGenres } from './request';
import App from './pages/App';

const initialState = {};
const store = configureStore(initialState);

const init = () => {
  getGenres()
    .then(data => store.dispatch(loadGenres(data)))
    .catch(err => console.log('error: ', err));
};

init();

const Root = () => <Provider store={store}><App /></Provider>;

ReactDOM.render(<Root />, document.getElementById('__HYPERTUBE__'));
