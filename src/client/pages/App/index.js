import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import SideMenu from '../../components/SideMenu';
import routes from '../../routes';
import { AppContainer } from './style';

const RouteWithSubRoutes = route => (
  <Route path={route.path} exact={route.exact} render={props => <route.component {...props} />} />
);

const App = () => (
  <AppContainer>
    <Router>
      <div>
        <SideMenu />
        {routes.map(route => (
          <RouteWithSubRoutes key={route.id} {...route} />
        ))}
      </div>
    </Router>
  </AppContainer>
);

export default App;
