import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from '../../routes';
import { AppContainer } from './style';

const App = () => (
  <AppContainer>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </AppContainer>
);

export default App;
