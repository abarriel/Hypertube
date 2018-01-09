import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import { userFormValidate } from '../validation';
import { uploadImg } from '../middleware';
import User from '../queries/user';
import { createUsersTable, deleteUsersTable } from '../../database/migrations/users';
import { Environment } from '../../core';

const service = {
  async post(req: express.Request, res: express.Response, next: any) {
    const { user } = req.app.locals;

    // await deleteUsersTable();
    // await createUsersTable();

    if (await User.isRegistered(user.login)) return next({ type: 'db', details: 'User already register under a similar login' });
    if (_.some(user, _.isEmpty)) return next({ type: 'Validation', details: 'One value is required but is undefined' });

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const [userInDb] = await User.post({ ...user, password: hashedPassword });
    res.json({ user: userInDb });
  },
  async put(req: express.Request, res: express.Response) {
  },
  async delete(req: express.Request, res: express.Response) {
  },
  async get(req: express.Request, res: express.Response) {
    res.json({ get: 'get'});
  },
  async login(req: express.Request, res: express.Response, next: any) {
    const { user } = req.app.locals;
    if (!await User.isRegistered(user.login)) return next({ type: 'db', details: 'User not found' });
    const { password, id } = await User.getByLogin(user.login, ['password', 'id']);
    if (!await bcrypt.compare(user.password, password)) return next({ type: 'Auth', details: 'Failed to authenticate' });
    const jwtConfig = Environment.getConfig().jwt;
    res.json({ hyperFlixToken: jwt.sign({ sub: id }, jwtConfig.accessTokenSecret, { expiresIn: jwtConfig.expiresIn }) });
  }
};

const init:any = {
  name: 'user',
  service,
  before: {
    post: [uploadImg, userFormValidate],
    login: [userFormValidate]
  },
  after: {

  }
};

export default init;
