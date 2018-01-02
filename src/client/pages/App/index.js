import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Scrollbar from 'react-smooth-scrollbar';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import SideMenu from '../../components/SideMenu';
import routes from '../../routes';
import { AppContainer } from './styles';

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
        <Scrollbar damping={0.1}>
          <TransitionGroup >
            {routes.map(route => (
              <Fade key={route.id}>
                <RouteWithSubRoutes {...route} />
              </Fade>
            ))}
          </TransitionGroup>
        </Scrollbar>
      </div>
    </Router>
  </AppContainer>
);

export default App;
