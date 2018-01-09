import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import middlewaresBinding from '../middleware';
import Users from '../queries/users';
import { createUsersTable, deleteUsersTable } from '../../database/migrations/users';
import { Environment } from '../../core';

class UsersController {
  name = 'users';

  @middlewaresBinding(['uploadImg', 'userFormValidate'])
  async post(req: express.Request, res: express.Response, next: any) {
    const { user } = req.app.locals;
    // await deleteUsersTable();
    // await createUsersTable();

    if (await Users.isRegistered({ login: user.login })) return next({ type: 'db', details: 'User already register under a similar login' });
    if (_.some(user, _.isEmpty)) return next({ type: 'Validation', details: 'One value is required but is undefined' });

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const [userInDb] = await Users.post({ ...user, password: hashedPassword });
    res.json({ user: userInDb });
  };

  @middlewaresBinding(['getToken', 'isAuthorize', 'userFormValidate'])
  async put(req: express.Request, res: express.Response) {
  };

  @middlewaresBinding(['getToken', 'isAuthorize', 'userFormValidate'])
  async get(req: express.Request, res: express.Response) {
    const { limit, offset } = req.app.locals;
    const users = await Users.gets(limit, offset);
     res.json({ users });
  };

  @middlewaresBinding('userFormValidate')
  async login(req: express.Request, res: express.Response, next: any) {
    const { user } = req.app.locals;
    if (!await Users.isRegistered({ login: user.login })) return next({ type: 'db', details: 'User not found' });
    const { password, id } = await Users.getByLogin(user.login, ['password', 'id']);
    if (!await bcrypt.compare(user.password, password)) return next({ type: 'Auth', details: 'Failed to authenticate' });
    const jwtConfig = Environment.getConfig().jwt;
    res.json({ hyperFlixToken: jwt.sign({ sub: id }, jwtConfig.accessTokenSecret, { expiresIn: jwtConfig.expiresIn }) });
  };

  @middlewaresBinding(['getToken', 'isAuthorize'])
  async single(req: express.Request, res: express.Response, next: any) {
    const { id } = req.params;
    const { decodedToken: { sub } } = req.app.locals;
    const params: any = { id };
    if (id === 'me') {
      params.id = sub;
      params.columns = 'all';
    };
    if (!/[0-9]{1,5}/.test(params.id)) return next({ type: 'validation', details: 'Wrong Id provided' });
    const user = await Users.single(params);
    if (_.isEmpty(user)) return next({ type: 'db', details: 'ressources not present' });
    res.json({ user });
  };
};

export default UsersController;
