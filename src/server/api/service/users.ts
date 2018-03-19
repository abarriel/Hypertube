import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as del from 'del';
import * as path from 'path';

import middlewaresBinding from '../middleware';
import mailer from '../middleware/mail';
import { Users } from '../../database/queries';
import { Environment } from '../../core';

class UsersController {
  name = 'users';

  @middlewaresBinding(['uploadImg', 'userFormValidate'])
  async post(req: express.Request, res: express.Response, next: any) {
    const { user } = req.app.locals;
    if (await Users.isRegistered({ username: user.username, omniauth: 'false' })) return next({ type: 'db', details: 'User already register under a similar login' });
    if (_.some(user, _.isNil)) return next({ type: 'Validation', details: 'One value is equired but is undefined' });

    const userInDb = await Users.post({ ...user, omniauth: false });
    res.json({ user: userInDb });
  };

  @middlewaresBinding(['isAuthorize', 'uploadImg', 'userFormValidate'])
  async put(req: express.Request, res: express.Response, next: any) {
    const { user: { omniauth, id, profilePicture } } = req;
    if (omniauth || omniauth === 'true') return next({ type: 'Auth', details: 'Cannot update your info bc you user is update by your provider'});
    const { user: dataToUpdate } = req.app.locals;
    if (dataToUpdate.username) return next({ type: 'Auth', details: 'Cannot update your login'});
    try {
      await Users.update(dataToUpdate, id);
      res.json({ status: 'user updated'});
      // if (dataToUpdate.profilePicture && profilePicture !== 'upload/default.jpg') {
      //  const ok =  del.sync(path.join('../../../../public', profilePicture));
      // }
    } catch (err) {
      next({ type: 'db', details: 'err while updating info', err });
    }
  };

  @middlewaresBinding(['isAuthorize', 'userFormValidate'])
  async get(req: express.Request, res: express.Response) {
    const { limit, offset } = req.app.locals;
    const users = await Users.gets(limit, offset);
     res.json({ users });
  };

  @middlewaresBinding(['isAuthorize'])
  async single(req: express.Request, res: express.Response, next: any) {
    const { id } = req.params;
    const { id: myId } = req.user;
    const params: any = { id };
    if (id === 'me') {
      params.id = myId;
      const { get } = req.query;
      if (get)
        params.columns = _.takeWhile(_.isArray(get) ? get : [get], (v:any) => _.includes(v, ['profilePicture']))
      else
        params.columns = 'all';
    };
    if (!/[0-9]{1,5}/.test(params.id)) return next({ type: 'validation', details: 'Wrong Id provided' });
    const user = await Users.single(params);
    if (_.isEmpty(user)) return next({ type: 'db', details: 'ressources not present' });
    res.json({ user });
  };
};

export default UsersController;

