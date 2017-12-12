const config = require('../../config').default;

export class Environment {

   static getConfig(): Iconfig {
        return config;
    }

};
