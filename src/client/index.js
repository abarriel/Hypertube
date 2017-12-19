import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store';
import { loadMovies } from './actions/movies';
import App from './pages/App';

const initialState = {};
const store = configureStore(initialState);

store.dispatch(loadMovies());

const Root = () => <App />;

ReactDOM.render(<Root />, document.getElementById('__HYPERTUBE__'));
