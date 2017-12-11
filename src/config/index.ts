import * as _ from 'lodash';
import { expect } from 'chai';

import development from './development';
import production from './production';
import userConfig from './parameters';

const supportedModes:{ [index:string] : Iconfig } = { development, production };

expect(process.env.NODE_ENV).to.be.oneOf(Object.keys(supportedModes));

_.forEach(supportedModes, (config) => _.merge(
  config,
  userConfig,
));

export default supportedModes[process.env.NODE_ENV];
