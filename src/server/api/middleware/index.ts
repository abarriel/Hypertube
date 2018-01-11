
import * as _ from 'lodash';

import { errorHandler }  from './error';
import { uploadImg } from './upload';
import { getToken, isAuthorize } from './auth';
import { moviesFormValidate, userFormValidate } from './validation';

const middlewaresFunc:any = { errorHandler, uploadImg, getToken, isAuthorize, moviesFormValidate, userFormValidate } ;

const middlewaresBinding = (middlewaresNames: any) => (target: any, targetKey: string, descriptor: TypedPropertyDescriptor<any>) => {
  let mainFunc = descriptor.value;
  const middlewares = _.reduce(_.isArray(middlewaresNames) ? middlewaresNames: [middlewaresNames], (acc:any, item, key) => {
    if(typeof item === 'function') return [...acc, item];
    return [...acc, middlewaresFunc[item]];
  }, []);
  descriptor.value = _.concat(middlewares, mainFunc);
};

export { errorHandler, listenErrorDB }  from './error';
export { uploadImg } from './upload';
export { getToken, isAuthorize } from './auth';
export { moviesFormValidate, userFormValidate } from './validation';
export default  middlewaresBinding;
