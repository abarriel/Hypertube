import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as errorHandler from 'errorhandler';
import * as cors from 'cors';
import * as _ from 'lodash';

const getUrl = (server: any) => `http://${server.address().address}:${server.address().port}`;

/**
 *  The Server is actually working and functional once the callback of app.listen is called.
 *  Meaning, without le console.log prompt, the server is not actually functional.
 *
 * @param {Iconfig} config
 * @param {Client} db
 */
const initServer = async (config: Iconfig, db: any) => {
  const app = await express();
  const { server: { host, port } } = config;


  await app
    .use(compression())
    .use(logger('dev'))
    .use(cookieParser())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors())
    .use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
      err.status = 201;
      next(err);
    })
    .use(errorHandler());
    // .use(getToken)
    // .use(getUserFromTokenWithoutErr)

  await app
    .get('/', (req, res) => res.json({ ping: 'Hello World' }));

    const httpServer = await app.listen(port, host, () => {
      console.log(`Server serve: ${getUrl(httpServer)}`);
    });
};

export default initServer;
