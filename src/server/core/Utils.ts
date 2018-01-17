import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';
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

const videoExtensions = [
	".3g2",
	".3gp",
	".aaf",
	".asf",
	".avchd",
	".avi",
	".drc",
	".flv",
	".m2v",
	".m4p",
	".m4v",
	".mkv",
	".mng",
	".mov",
	".mp2",
	".mp4",
	".mpe",
	".mpeg",
	".mpg",
	".mpv",
	".mxf",
	".nsv",
	".ogg",
	".ogv",
	".qt",
	".rm",
	".rmvb",
	".roq",
	".svi",
	".vob",
	".webm",
	".wmv",
	".yuv"
];

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

  isVideo: (fileName: string) => _.includes(videoExtensions, path.extname(fileName)),
};

export { Utils };
