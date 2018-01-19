import * as _ from 'lodash';
import * as express from 'express';
import * as Joi from 'joi';
import * as path from 'path';

const CommentSchema = Joi.object({
  body: Joi.string().min(5).max(250),
  imdbId: Joi.string().min(5).alphanum(),
  limit: Joi.number().integer().min(0).max(50).optional(),
  offset: Joi.number().integer().min(0).optional(),
});

const commentsValidate = async (req: express.Request, res: express.Response, next: express.next) => {
  const { body } = req.body;
  const { imdbId } = req.params;
  const { limit, offset } = req.query;
  const params:any = {};

  params.body =  body;
  params.imdbId = imdbId;
  params.limit = limit ? parseInt(limit) : 50;
  params.offset = offset ? parseInt(offset) : 0;
  try {
    const data: any = await Joi.validate(params, CommentSchema);
    req.app.locals = {  ...req.app.locals, comment: { ..._.omitBy(_.omit(data, ['limit', 'offset']), _.isNil) }, limit: data.limit, offset: data.offset };
    next();
  } catch (err) {
    next({ type: 'JoiSchema', err });
  };
};

export {
  commentsValidate,
}
