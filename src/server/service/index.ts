/* eslint-disable */
import * as express from 'express';
import * as fs from 'fs';
import * as _ from 'lodash';

import movies from './movies';
import user from './user';

// _delete because delete is a reserver method
const REST = ['post', 'put', 'get', '_delete', 'delete'];

const router:any = express.Router();

const allRoutes = { movies, user };

export default (() => {
    const routes:any = _.map(allRoutes, (route) => _.reduce(route.service, (acc, method, key) => {
      let verbName = undefined;
      let urlPathExtends = undefined;
      if (_.includes(REST, method.name)) {
        verbName = _.startsWith(method.name,'_') ? _.trimStart(method.name, '_') : method.name;
      } else {
        // verbName = userSchema[method.name].verb;
        // urlPathExtends = userSchema[method.name].url;
      }
      return ({...acc, [key]: {
          method,
          verbName,
          urlPath: !urlPathExtends ? `/${route.name}` : `/${route.name}${urlPathExtends}`,
          beforeHooks: _.includes(REST, method.name) ? route.before[verbName] : route.before[method.name],
          afterHook: _.includes(REST, method.name) ? route.after[verbName] : route.after[method.name],
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
