import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import App from './pages/App';
import Auth from './auth';

const initialState = {};
const store = configureStore(initialState);

const Root = () => (
  <Provider store={store}>
    <Auth>
      <App />
    </Auth>
  </Provider>);

ReactDOM.render(<Root />, document.getElementById('__HYPERTUBE__'));
