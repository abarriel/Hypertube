import * as _ from 'lodash';
import * as express from 'express';
import * as Joi from 'joi';

const UserSchema = Joi.object({
  imdbId: Joi.string().min(5).max(20).regex(/^\w{5,20}$/),
  start: Joi.number().integer(),
  end: Joi.number().integer(),
});

const videoValidate = async (req: express.Request, res: express.Response, next: express.next) => {
  const { imdbId } = req.params;
  const { range } = req.headers;
  const params: any = {};

  params.imdbId = imdbId;
  if (!range) return next({ type: 'Torrent', details: 'Range not provided' });
  try {
  const positions = range.replace(/bytes=/, '').split('-');
  const start = parseInt(positions[0], 10);
  const end = positions[1] ? parseInt(positions[1], 10) : undefined;

  params.start = start;
  params.end = end;

  const data: any = await Joi.validate(params, UserSchema);
  req.app.locals = {  ...req.app.locals, video: data };
  next();
  } catch (err) {
  next({ type: 'JoiSchema', err });
  };
};

export {
  videoValidate,
}
