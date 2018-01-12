import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import middlewaresBinding from '../middleware';
import Users from '../../database/queries/users';
import { Environment } from '../../core';

class UsersController {
  passport: any;

  name = 'auth';

  constructor(args: any) {
    const { passport }:any = args || {};
    this.passport = passport;
  };

  facebook = (req: any, res:any, next:any) => this.passport.authenticate('facebook')(req, res, next)
  fortyTwo = (req: any, res:any, next:any) => this.passport.authenticate('42')(req, res, next)

  @middlewaresBinding(['userFormValidate'])
  async local(req: express.Request, res: express.Response, next: any) {
    this.passport.authenticate('local', {
      successRedirect : '/', // redirect to the secure profile section
    })(req, res, next);
  };

  async fortyTwoCB(req: express.Request, res: express.Response, next: any) {
    this.passport.authenticate('42', {
      successRedirect: '/',
    })(req, res, next)};

  async facebookCB(req: express.Request, res: express.Response, next: any) {
    this.passport.authenticate('facebook', {
      successRedirect: '/',
    })(req, res, next)};


};

export default UsersController;
