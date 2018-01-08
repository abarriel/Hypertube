/* eslint-disable */
import * as express from 'express';
import * as fs from 'fs';
import * as _ from 'lodash';
import * as YAML from 'js-yaml';
import * as path from 'path';

import movies from './movies';
import user from './user';

// _delete because delete is a reserver method
const REST = ['post', 'put', 'get', '_delete', 'delete'];

const router:any = express.Router();

const allRoutes = { movies, user };

const moviesSchema = YAML.load(fs.readFileSync(path.join(__dirname, 'routes.yaml'), 'utf8'));

export default (() => {
    const routes:any = _.map(allRoutes, (route) => _.reduce(route.service, (acc, method, key) => {
      let verbName = undefined;
      if (_.includes(REST, method.name)) {
        verbName = _.startsWith(method.name,'_') ? _.trimStart(method.name, '_') : method.name;
      } else {
        _.find(moviesSchema.paths, (value, key, o) => {
          const pathData = _.split(key, '.');
          // console.log('WHEN ',method.name, ' = ',route.name);
          if (pathData[0] === _.split(route.name, '/')[0] && pathData[1] === method.name) {
            // console.log('OK', method.name, ' verb ', value.verb);
            route.name = value.path;
            verbName = value.verb;
          }
        });
      }
      return ({...acc, [key]: {
          method,
          verbName,
          urlPath: `/${route.name}`,
          beforeHooks: _.includes(REST, method.name) ? route.before[verbName] : route.before[method.name],
          afterHook: route.after && (_.includes(REST, method.name) ? route.after[verbName] : route.after[method.name]),
        }});
    }, {}));
    return _.reduce(routes, (acc, values, key) => {
      _.forEach(values, (route) => {
        const { beforeHooks, afterHook, method, verbName, urlPath } = route;
        const middleware = beforeHooks ? _.values(beforeHooks) : [];
        middleware.push(method);
        if (afterHook) middleware.push(afterHook);
        router[verbName](urlPath, middleware);
      })
      return router;
    }, {});
})();
