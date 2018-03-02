import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import middlewaresBinding from '../middleware';
import { Users } from '../../database/queries';
import { Environment } from '../../core';

class UsersController {
  passport: any;
  cb: any;
  funcAuth: any;

  name = 'auth';
  opt = {
    successRedirect: '/',
  };

  constructor(args: any) {
    const { passport }: any = args || {};
    this.passport = passport;
    this.funcAuth = (strategy: string) => (req: any, res: any, next: any) => this.passport.authenticate(strategy)(req, res, next);
    this.cb = (strategy: string, opt: any) => (req: any, res: any, next: any) => this.passport.authenticate(strategy, opt)(req, res, next);
  };

  @middlewaresBinding(['isAuthorize'])
  async get(req: any, res: any, next: any) {
    res.json({ status: 'Authorized' });
  };

  @middlewaresBinding(['isAuthorize'])
  async post(req: any, res: any, next: any) {
    req.logout();
    // res.redirect('/');
    res.json({ status: 'Ok' });
  };

  @middlewaresBinding(['userFormValidate'])
  async local(req: express.Request, res: express.Response, next: any) {
    this.passport.authenticate('local', (err, user, info) => {
      console.log(err);
      if (err) next({ type: 'validation', details: 'bad request' });
      console.log('user:' ,user);
      req.logIn(user, err => {
        if (err) next({ type: 'validation', details: 'bad request after login' });
        else res.redirect('/')
      })
    })(req, res, next);
  };

  facebook =  (...args: any[]) => this.funcAuth('facebook')(...args)
  fortyTwo = (...args: any[]) => this.funcAuth('42')(...args)
  twitter = (...args: any[]) => this.funcAuth('twitter')(...args)
  github = (...args: any[]) => this.funcAuth('github')(...args)
  google = (...args: any[]) => this.funcAuth('google')(...args)
  // spotify = (...args: any[]) => this.funcAuth('spotify')(...args)

  fortyTwoCB = (...args: any[]) => this.cb('42', this.opt)(...args);
  facebookCB = (...args: any[]) => this.cb('facebook', this.opt)(...args);
  twitterCB = (...args: any[]) => this.cb('twitter', this.opt)(...args);
  githubCB = (...args: any[]) => this.cb('github', this.opt)(...args);
  googleCB = (...args: any[]) => this.cb('google', this.opt)(...args)
  localCB = (...args: any[]) => this.cb('local', this.opt)(...args);
  // spotifyCB = (...args: any[]) => this.cb('spotify', this.opt)(...args);
};

export default UsersController;
