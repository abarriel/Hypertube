import * as fs from 'fs';
import * as path from 'path';
import * as _ from 'lodash';
import * as OS from 'opensubtitles-api';
import * as torrentStream from 'torrent-stream';
import * as colors from 'colors/safe';

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

const formatBytes = (a: any, b?: any) => {
  if (0 == a) return "0 Bytes";
  var c = 1024,
      d = b || 2,
      e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      f = Math.floor(Math.log(a) / Math.log(c));
  return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
};

const Utils = {

  OpenSubtitles: new OS({
    useragent: 'TemporaryUserAgent',
    username: openSubApi.username,
    password: openSubApi.password,
  }),

  buildPath: (fileName: string, lang: string, extension?: string) => {
    let filePath;
    if (lang !== 'en')
      lang = 'fr';
    if (extension)
    filePath = `public/upload/${fileName}/${lang}-${fileName}${extension}`;
    else
    filePath = `public/upload/${fileName}/${lang}-${fileName}`;
    ensureDirectoryExistence(filePath);
    return filePath;
  },

  isVideo: (fileName: string) => _.includes(videoExtensions, path.extname(fileName)),

  getStreamTorrent: (hash: string, imdbId: string) => new Promise((resolve, reject) => {
    let movie: any = '';
    const Engine: any = torrentStream(hash, {
      connections: 1000,                  // Max amount of peers to be connected to.
      uploads: 0,                         // Number of upload slots.
      tmp: 'public/upload/tmp',           // Root folder for the files storage.
      path: `public/upload/${imdbId}/`,   // Where to save the files. Overrides `tmp`.
      trackers: [
        'udp://tracker.openbittorrent.com:80',
        'udp://tracker.ccc.de:80',
        'udp://track.two:80',
        'udp://open.demonii.com:1337/announce',
        'udp://tracker.coppersurfer.tk:6969',
        'udp://glotorrents.pw:6969/announce',
        'udp://tracker.opentrackr.org:1337/announce',
        'udp://torrent.gresille.org:80/announce',
        'udp://p4p.arenabg.com:1337',
        'udp://tracker.leechers-paradise.org:6969',
        'udp://tracker.internetwarriors.net:1337',
      ],
    });

    Engine.on('ready', () => {
      Engine.files.forEach(file => {
        if (Utils.isVideo(file.name) && file.length > movie.length) {
          const ext = path.extname(file.name);
          movie = file;
          movie.size = file.length;
          movie.path = (ext: string) => `public/upload/${imdbId}/${Engine.torrent.name}/${file.name.replace(ext, '')}${ext}`;
          resolve(movie);
        }
      });
    });

    Engine.on('download', (pieceIndex: number) => {
      console.log(`piece ${pieceIndex.toString().padStart(3)} - Downloaded: ${formatBytes(Engine.swarm.downloaded).padStart(10)} - Length Movie: ${formatBytes(movie.size).padStart(10)}`, colors.green(`${Math.floor((Engine.swarm.downloaded / movie.length) * 100)} %`));
    });

    Engine.on('idle', () => {
    });
  }),
};

export { Utils };
