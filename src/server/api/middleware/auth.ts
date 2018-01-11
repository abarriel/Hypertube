import * as express from 'express';
import * as _ from 'lodash';
import * as jwt from 'jsonwebtoken';

import Users from '../queries/users';
import { Environment } from '../../core';
import { number } from 'joi';

const getToken = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const auth = req.get('authorization');
  console.log('GETTOKEN', this)
  const token =
    (auth && auth.length > 15 && auth.substr(0, 7) === 'Bearer ') ? auth.substr(7) : undefined
    || req.query.authToken
    || req.body.authToken;
  req.app.locals = { authToken: token };
  next();
};

const isAuthorize = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { authToken } = req.app.locals;
    const { accessTokenSecret } = Environment.getConfig().jwt;

    if (_.isEmpty(authToken)) return next({ type: 'Auth', details: 'Empty Token' });
    try {
      const decodedToken:any = jwt.verify(authToken, accessTokenSecret);
      if (_.isEmpty(decodedToken) || !_.isInteger(decodedToken.sub))  return next({ type: 'Auth', details: 'Wrong Token' });
      if (!await Users.isRegistered({ id: decodedToken.sub })) return next({ type: 'Auth', details: 'User not found matching the token id' });
      req.app.locals = { decodedToken: { sub: decodedToken.sub }};
      next();
    } catch (err) {
      return next({ type: 'Auth', details: 'Error happens during authorization check / Token Expired' });
    }
};

export { isAuthorize, getToken };
