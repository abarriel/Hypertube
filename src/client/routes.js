import React from 'react';
import { Route, Redirect } from 'react-router';
import { Switch } from 'react-router-dom';

import Home from './pages/Home';

export default (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/test" component={Home} />
    <Redirect from="*" to="/" />
  </Switch>
);
