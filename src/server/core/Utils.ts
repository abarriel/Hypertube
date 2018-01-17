import * as fs from 'fs';
import * as path from 'path';
import * as OS from 'opensubtitles-api';

import { Environment } from '.';

const openSubApi = Environment.getConfig().openSubApi;

const ensureDirectoryExistence = (filePath: string) => {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

const Utils = {

  OpenSubtitles: new OS({
    useragent: 'TemporaryUserAgent',
    username: openSubApi.username,
    password: openSubApi.password,
  }),

  buildPath: (fileName: string, extension?: string) => {
    let filePath;
    if (extension)
      filePath =`public/upload/${fileName}/${fileName}${extension}`;
    else
      filePath =`public/upload/${fileName}/${fileName}`;
    ensureDirectoryExistence(filePath);
    return filePath;
  },
};

export { Utils };
