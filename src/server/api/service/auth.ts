import * as _ from 'lodash';
import * as bcrypt from 'bcrypt';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import middlewaresBinding from '../middleware';
import Users from '../queries/users';
import { Environment } from '../../core';

class UsersController {
  name = 'auth';

  async fortyTwo(req: express.Request, res: express.Response) {
    console.log('fortyTwo')
  };
};

export default UsersController;
