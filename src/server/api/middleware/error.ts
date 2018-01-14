import * as express from 'express';

import { DB } from '../../core';
import * as colors from 'colors/safe';

const errorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(201);
  let errMsg = {};
  if (err.type === 'validation' || err.type === 'db' || err.type === 'Auth' || err.type === 'Torrent' || err.type === 'Stream') {
    errMsg = { type: err.type, details: err.details, err: err.err };
  }
  else if (err.type === 'JoiSchema')
    errMsg = { type: err.type, details: err.err.details };
  else if (err.type === 'dbQuery') {
    errMsg = {type: err.type, details: err.details.toString().substr('\n') };
  }
  res.json(errMsg);
  console.log(colors.red('ERROR: \n'), errMsg, colors.red('\nEND ERROR'));
};

const notFoundErr = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  next({ type: 'Auth', details: 'endpoint api not found', err: req.originalUrl});
};

const listenErrorDB = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  DB.on('query-error', (err: any, obj: any) => {
    next({ type: 'dbQuery', details: err })
  });
  next();
}
export { errorHandler, listenErrorDB, notFoundErr };
