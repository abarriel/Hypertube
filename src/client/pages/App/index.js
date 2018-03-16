import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { isEmpty } from 'lodash';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Scrollbar from 'react-smooth-scrollbar';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './style.css';
import SideMenu from '../../components/SideMenu';
import routes from '../../routes';
import { AppContainer } from './styles';
import { loadGenres } from '../../actions/movies';
import { loadUser } from '../../actions/user';
import req from '../../request';

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

const actions = { loadGenres, loadUser };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(null, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      if (isEmpty(this.props.genres)) {
        req.genres()
          .then(data => {
            this.props.loadGenres(data);
          });
      }
      if (isEmpty(this.props.user)) {
        req.getMyInfos()
          .then(data => {
            this.props.loadUser(data);
          });
      }
    },
  }),
)(App);

