import * as express from 'express';
import * as _ from 'lodash';

import Users from '../../database/queries/users';
import { Environment } from '../../core';
import { number } from 'joi';

const isAuthorize = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
      const isAuthenticaded = req.isAuthenticated();
      if(!isAuthenticaded) next({ type: 'Auth', details: 'Not Authorized'});
      next();
    } catch (err) {
      return next({ type: 'Auth', details: 'Error happens during authorization check' });
    }
};

export { isAuthorize };
