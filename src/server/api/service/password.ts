import * as _ from 'lodash';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';

import middlewaresBinding from '../middleware';
import mailer from '../middleware/mail';
import { Users } from '../../database/queries';

const previewMovieInfos = ['imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary'];

class PasswordController {
  name = 'password';

  @middlewaresBinding(['userFormValidate'])
  async get(req: express.Request, res: express.Response, next: any) {
    const { user: { email } } = req.app.locals;
    try {
      const user = await Users.getByEmail(email, ['password', 'id', 'email']);
      if (_.isEmpty(user)) return next({ type: 'db', details: 'Failed to send email' });
      const token = jwt.sign({ sub: user.id }, user.password);
      mailer(user.email, token);
      res.json({ status: 'email sent' });
    } catch (err) {
      console.log(err);
      next({ type: 'db', details: 'Failed to send email' });
    }
  };

  @middlewaresBinding(['userFormValidate'])
    async put(req: express.Request, res: express.Response, next: any) {
      const { user: { password } } = req.app.locals;
      const { token } = req.query;
      const { sub }: any = jwt.decode(token);
      if (!/[0-9]{1,5}/.test(sub)) return next({ type: 'validation', details: 'Wrong Id provided' });
      if (!password) return  next({ type: 'validation', details: 'Password needed' });
      try {
        const user = await Users.single({ id: sub, columns: 'all' });
        console.log(token, user.password);
        const decodedToken:any = jwt.verify(token, user.password);
        if (_.isEmpty(decodedToken))  return next({ type: 'Auth', details: 'Wrong Token' });
        await Users.update({ password }, sub);
        res.json({ status: 'ok' });
      } catch (err) {
        next({ type: 'db', details: 'failed to update password', err});
      }
  };
};

export default PasswordController;
