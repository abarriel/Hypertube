/* eslint-disable */
import * as express from 'express';
import * as fs from 'fs';
import * as _ from 'lodash';
import * as YAML from 'js-yaml';
import * as path from 'path';

import movies from './movies';
import users from './users';
import auth from './auth';

// _delete because delete is a reserver method
const REST = ['post', 'put', 'get', '_delete', 'delete'];

const router:any = express.Router();

const allRoutes = { movies, users, auth };
const moviesSchema = YAML.load(fs.readFileSync(path.join(__dirname, 'routes.yaml'), 'utf8'));

export default (() => {
    const routes:any = _.map(allRoutes, (route :any) => _.forEach(_.pull(Object.getOwnPropertyNames(route.prototype), 'constructor'), (method, key) => {
      const mainFunc = _.isArray(route.prototype[method]) ? _.find(route.prototype[method], (v) => v.name === method) : route.prototype[method];
      let pathName = new route().name;
      let verbName = undefined;
      if (_.includes(REST, mainFunc.name)) {
        verbName = _.startsWith(mainFunc.name,'_') ? _.trimStart(mainFunc.name, '_') : mainFunc.name;
      } else {
        _.find(moviesSchema.paths, (value, key, o) => {
          const pathData = _.split(key, '.');
          if (pathData[0] === _.split(pathName, '/')[0] && pathData[1] === mainFunc.name) {
            pathName = value.path;
            verbName = value.verb;
          }
        });
      };
      router[verbName](`/${pathName}`, route.prototype[method]);
    }));
    return router;
})();
