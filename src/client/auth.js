import React, { Component } from 'react';
import _ from 'lodash';

import req from './request';

export const noAuthneeded = ['login', 'register', 'lost'];

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
    }
  }

  render() {
    const { children } = this.props;
    // return children; // avoid auth for debug;

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

export default Auth;
