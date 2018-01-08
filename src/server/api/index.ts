import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';
import * as _ from 'lodash';
import * as swaggerUi from 'swagger-ui-express';

import * as colors from 'colors/safe';
import errorHandler from './middleware/error';
import dispatchRoute from './service';
import * as swaggerDocument from './swagger.json';
import * as config from '../../config';

// import { GraphQLRoutes } from './routes';

const getUrl = (server: any) => `http://${server.address().address}:${server.address().port}`;

/**
 *  The Server is actually working and functional once the callback of app.listen is called.
 *  Meaning, without the console.log prompt, the server is not actually functional.
 *
 * @param {Iconfig} config
 */

var options: any = {
  explorer : true,
  swaggerOptions: {
    validatorUrl : null,
}
};
 const initServer = async (config: Iconfig) => {
  const app = await express();
  const { server: { host, port } } = config;

  await app
    .use(compression())
    .use(logger('dev'))
    .use(cookieParser())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(cors())
    // .use(errorHandler);

    await app
      .get('/', (req, res) => res.json({ ping: 'Hello World' }))
      .use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
      .use('/api', dispatchRoute);

    await app
      .use(errorHandler);

    const httpServer = await app.listen(port, host, () => {
      console.log(colors.green(`[API] Server running: ${getUrl(httpServer)}`));
      console.log(colors.yellow(`[API] See documentation: ${getUrl(httpServer)}/api/doc\n`));
    });
};

export default initServer;
