import * as express from 'express';

import { DB } from '../../core';
import * as colors from 'colors/safe';

const errorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(201);
  let errMsg = {};
  if (err.type === 'validation' || err.type === 'db' || err.type === 'Auth') {
    errMsg = { type: err.type, details: err.details };
  }
  else if (err.type === 'JoiSchema')
    errMsg = { type: err.type, details: err.err.details };
  else if (err.type === 'dbQuery') {
    errMsg = {type: err.type, details: err.details.toString().substr('\n') };
  }
  res.json(errMsg);
  console.log(err);
  console.log(colors.red('ERROR: \n'), errMsg, colors.red('\nEND ERROR'));
};

const listenErrorDB = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  DB.on('query-error', (err: any, obj: any) => {
    next({ type: 'dbQuery', details: err })
  });
  next();
}
export { errorHandler, listenErrorDB };
