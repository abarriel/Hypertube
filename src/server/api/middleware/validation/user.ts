import * as _ from 'lodash';
import * as express from 'express';
import * as Joi from 'joi';
import * as path from 'path';
import * as bcrypt from 'bcrypt';

const UserSchema = Joi.object({
  username: Joi.string().min(5).max(25).alphanum(),
  password: Joi.string().min(6).max(30).regex(/^(?=.*[a-zA-Z])(?=.*\W)(?=.*[0-9]).+$/),
  email: Joi.string().email(),
  firstName: Joi.string().min(2).max(30).regex(/^[A-Za-z ]+$/),
  lastName: Joi.string().min(2).max(30).regex(/^[A-Za-z ]+$/),
  profilePicture: Joi.string().optional(),
  lang: Joi.string(),
  limit: Joi.number().integer().min(0).max(50).optional(),
  offset: Joi.number().integer().min(0).optional(),
});

const userFormValidate = async (req: express.Request, res: express.Response, next: express.next) => {
  const { username, password, email, firstName, lastName, lang } = req.body;
  const { limit, offset } = req.query;
  let { path: pp }:any = req.file || {};
  const params: any = {};
  if (pp)
  {
    pp = _.split(pp, '/');
    pp = _.drop(pp, pp.length - 2 );
    params.profilePicture = `${pp[0]}/${pp[1]}`;
  }

  params.limit = limit ? parseInt(limit) : 20;
  params.offset = offset ? parseInt(offset) : 0;
  params.username = username;
  params.password = password;
  params.email = email || req.query.email;
  params.firstName = firstName;
  params.lastName = lastName;
  params.lang = lang;
  try {
    const data: any = await Joi.validate(params, UserSchema);
    if(data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    req.app.locals = { user: { ..._.omitBy(_.omit(data, ['limit', 'offset']), _.isNil) }, limit: data.limit, offset: data.offset };
    next();
  } catch (err) {
    next({ type: 'JoiSchema', err });
  };
};

export {
  userFormValidate,
}
