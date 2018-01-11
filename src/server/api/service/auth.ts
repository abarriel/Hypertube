import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import middlewaresBinding from '../middleware';
import Users from '../queries/users';
import { Environment } from '../../core';


class UsersController {
  passport: any;

  name = 'auth';

  constructor(args: any) {
    const { passport }:any = args || {};
    this.passport = passport;
    // console.log(passport);
  };

  facebook = (req: any, res:any) => this.passport.authenticate('facebook')(req, res)

  async facebookCB(req: express.Request, res: express.Response) {
    console.log('fortyTwo', req.session)
    res.json( {o: 'ok'});
  };
};


export default UsersController;
// app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['public_profile', 'email'] }));

// // handle the callback after facebook has authenticated the user
// app.get('/auth/facebook/cb', passport.authenticate('facebook'), (req, res) => {
//   console.log('cb');
//   res.json({ ok: 'ok' });
// })



// app.get('auth/facebook',passport.authenticate('42'), facebook)
