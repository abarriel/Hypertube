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

// const allRoutes = { movies, users, auth };
const allRoutes = { auth };
const routeDefinitions = YAML.load(fs.readFileSync(path.join(__dirname, 'routes.yaml'), 'utf8'));
const routeSchema = _.map(routeDefinitions.paths, (v, k: string, o) => {
  const pathData = _.split(k , '.');
  return ({ ...v, name: pathData[0], method: pathData[1] });
});

const strictRoutes = (name: string) => ((name: string) => _.reduce(routeSchema, (acc:any, item:any, key) => {
  if(name === item.name) return [...acc, item.method];
  else return acc;
}, []).concat(REST))(name);

export default ((args: any) => {
  const routes:any = _.map(allRoutes, (Controller :any) => {
    const instanciedController = new Controller(args);
    let pathName = instanciedController.name;
    const getAllMethodsAndAttribut = _.concat(Object.getOwnPropertyNames(instanciedController.__proto__), Object.keys(instanciedController));
    const methods = strictRoutes('auth');
    _.forEach(methods, (method, key) => {
      let verbName = undefined;
      if (_.includes(REST, method)) {
        verbName = _.startsWith(method,'_') ? _.trimStart(method, '_') : method;
      } else {
        _.find(routeDefinitions.paths, (value, key, o) => {
          const pathData = _.split(key, '.');
          if (pathData[0] === _.split(pathName, '/')[0] && pathData[1] === method) {
            pathName = value.path;
            verbName = value.verb;
          }
        });
      };
      let funcs = instanciedController.__proto__[method] || instanciedController[method];
      if (!funcs) return ;
      if(typeof funcs === 'function') {
        funcs = (...args: any[]) => instanciedController[method](...args);
      } else {
        const indexMainFunc = _.findIndex(funcs, { name: method }); // for instancie class method
        const mainFunc =  _.find(instanciedController[method], { name: method });
        instanciedController.__proto__[method] = mainFunc;
        funcs[indexMainFunc] =  (...args: any[]) => instanciedController[method](...args);
      }
      router[verbName](`/${pathName}`, funcs );
    })
    });
    return router;
  });
