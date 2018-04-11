import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const logger = createLogger({
  collapsed: true,
});

const configureStore = (initialState) =>
  createStore(
    reducer,
    initialState,
    applyMiddleware(thunk),
  );

export default configureStore;
