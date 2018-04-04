import { Component } from 'react';
import _ from 'lodash';
import { node } from 'prop-types';

import req from './request';

export const noAuthneeded = ['login', 'register', 'lost', 'reset'];

const propTypes = {
  children: node,
};

class Auth extends Component {
  state = {
    isAuthorized: false,
    isRequested: false,
  }

  async componentWillMount() {
    try {
      await req.isAuth();
      this.setState({ isAuthorized: true, isRequested: true });
    } catch (err) {
      this.setState({ isRequested: true });
      console.log(err);
    }
  }

  render() {
    const { children } = this.props;

    const { isAuthorized, isRequested } = this.state;
    const { pathname } = window.location;
    const [route] = _.split(pathname.slice(1), '/');

    if (!isRequested) return null;
    if (_.includes(noAuthneeded, route) && isAuthorized) {
      window.location = '/';
      return null;
    }
    if (!_.includes(noAuthneeded, route) && !isAuthorized) {
      window.location = '/login';
      return null;
    }

    return children;
  }
}

Auth.propTypes = propTypes;

export default Auth;
