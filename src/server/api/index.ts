import * as express from 'express';
import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as errorHandle from 'errorhandler';
import * as cors from 'cors';
import * as _ from 'lodash';

const getUrl = (server: any) => `http://${server.address().address}:${server.address().port}`;

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
    // .use(getToken)
    // .use(getUserFromTokenWithoutErr)

  // await app
  //   .use('/api', switchEvent)
  //   .post('/api/user/add_img', getToken, checkAuth, uploadImage, addImg)
  //   .use((err, req, res, next) => req.Err('upload failed'));

    const httpServer = await app.listen(port, host);
    console.log(`Server serve: ${getUrl(httpServer)}`);
  // return ({ ...ctx, http: httpServer });
};

export default initServer;
