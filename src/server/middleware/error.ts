import * as express from 'express';

const errorHandler = (err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(201);
  const errMsg = { type: err.type, details: err.err.details };
  if (err.type === 'JoiSchema')
    res.json(errMsg);
  console.log(errMsg);
};

export default errorHandler;
