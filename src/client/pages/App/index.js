import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import SideMenu from '../../components/SideMenu';
import LogoutButon from '../../components/LogoutButton';
import routes from '../../routes';
import { AppContainer } from './style';

const Fade = ({ children }) => (
  <CSSTransition
    transitionName="fade"
    timeout={1000}
  >
    {children}
  </CSSTransition>
);


const RouteWithSubRoutes = route => <Route path={route.path} exact={route.exact} render={props => <route.component {...props} />} />;

const App = () => (
  <AppContainer>
    <Router>
      <div>
        <SideMenu />
        <LogoutButon />
        <TransitionGroup >
          {routes.map(route => (
            <Fade key={route.id}>
              <RouteWithSubRoutes {...route} />
            </Fade>
          ))}
        </TransitionGroup>
      </div>
    </Router>
  </AppContainer>
);

export default App;
