import * as express from 'express';

const errorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(201);
  let errMsg = {};
  if (err.type === 'validation') {
    errMsg = { type: err.type, details: err.details };
  }
  else if (err.type === 'JoiSchema')
    errMsg = { type: err.type, details: err.err.details };
  res.json(errMsg);
  console.log(errMsg);
};

export default errorHandler;
