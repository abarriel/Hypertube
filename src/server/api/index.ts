import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as cors from 'cors';
import * as _ from 'lodash';
import * as swaggerUi from 'swagger-ui-express';
import * as colors from 'colors/safe';
import * as session from 'express-session';

import { errorHandler, listenErrorDB, notFoundErr } from './middleware';
import { passport } from '../core';
import dispatchRoute from './service';
import * as swaggerDocument from './swagger.json';
import * as config from '../../config';

const getUrl = (server: any) => `http://${server.address().address}:${server.address().port}`;

/**
 *  The Server is actually working and functional once the callback of app.listen is called.
 *  Meaning, without the console.log prompt, you can't tell server is actually functional.
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

  const corsOptions = {
    origin: 'http://localhost:8080',
    credentials: true,
    // allowedHeaders: 'Content-Type,Authorization',
    // preflightContinue: true,
  };
  await app
    .use(cors(corsOptions))
    .use(compression())
    .use(logger('dev'))
    .use(cookieParser())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(session({
        secret: 'iloveyou',
        resave: false,
        saveUninitialized: true
      }))
    .use(passport.initialize())
    .use(passport.session())
    .use(listenErrorDB)

  await app
    .get('/', (req, res) => {
      console.log(req.user);
      if (!req.user.omniauth)
        return res.json({ redirect: '/' }) ;
      res.redirect('http://localhost:8080', 301);
    })
    .use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
    .use('/api', dispatchRoute({ passport }));

  await app
    // .use(notFoundErr)
    .use(errorHandler);

    const httpServer = await app.listen(port, host, () => {
      console.log(colors.green(`[API] Server running: ${getUrl(httpServer)}`));
      console.log(colors.yellow(`[API] See documentation: ${getUrl(httpServer)}/doc\n`));
    });
};


export default initServer;
