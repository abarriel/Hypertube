import * as _ from 'lodash';
import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
// import * as str2vtt from 'srt2vtt';
import * as str2vtt from 'srt-to-vtt';
import * as torrentStream from 'torrent-stream';
import axios from 'axios';

import middlewaresBinding from '../middleware';
import { Users, Movies, List } from '../../database/queries';
import { Utils } from '../../core';

class VideoController {
  name = 'video';

  // @middlewaresBinding(['isAuthorize'])
  async get(req: express.Request, res: express.Response, next: any) {
    const file = './public/upload/tt0110912/tt0110912.mp4';
    fs.stat(file, (err, stats) => {
      if (err)
      {
        if (err.code === 'ENOENT') return next({ type: 'Torrent', details: 'File not found' });
        return next({ type: 'Torrent', details: 'Error happend', err });
      }
      //  Save the range the browser is asking for in a clear and reusable variable. The range tells us what part of the file the browser wants in bytes.
      //  e.g: bytes=65534-33357823
      const range: any = req.headers.range;
      if (!range) return next({ type: 'Torrent', details: 'Range not provided' });
      //  Convert the string range in to an array for easy use.
      const positions = range.replace(/bytes=/, '').split('-');
      //  Convert the start value in to an integer
      const start = parseInt(positions[0], 10);
      //  Save the total file size in to a clear variable
      const file_size = stats.size;
      //  IF    the end parameter is present we convert it in to an integer, the same way we did the start position.
      //  ELSE 	We use the file_size variable as the last part to be sent.
      const end = positions[1] ? parseInt(positions[1], 10) : file_size - 1;
      //  Calculate the amount of bits will be sent back to the browser.
      const chunksize = (end - start) + 1;
      //  Create the header for the video tag so it knows what is receiving.
      const head = {
        'Content-Range': 'bytes ' + start + '-' + end + '/' + file_size,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4'
      };
      //  Send the custom header
      res.writeHead(206, head);
      //  Create the createReadStream option object so createReadStream knows how much data it should be read from the file.
      const stream_position = { start, end };
      //  Create a stream chunk based on what the browser asked us for
      const stream = fs.createReadStream(file, stream_position)
      //  Once the stream is open, we pipe the data through the response object.
      stream.on('open', () => {
        stream.pipe(res);
      });
      //  If there was an error while opening a stream we stop the request and display it.
      stream.on('error', (err) => next({type: 'Stream', details: 'Stream Error', err }));
    });
  };

  async getVideo(req: express.Request, res: express.Response, next: any) {
    const { imdbId } = req.params;
    const { isVideo } = Utils;
    if (!/\w{5,20}/.test(imdbId)) return next({ type: 'validation', details: 'Wrong ImdbId provided' });
    const { torrents } = await Movies.single(imdbId);
    const torrent = torrents[0];
    const { hash, size_bytes } = torrent;
    const file:any = {};
    const engine = torrentStream(hash, {
      connections: 1000,     // Max amount of peers to be connected to.
      uploads: 0,          // Number of upload slots.
      tmp: 'public/upload',          // Root folder for the files storage.
      path: `public/upload/${imdbId}/torrent`, // Where to save the files. Overrides `tmp`.
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
    // engine.files.forEach((file) => {
    //   console.log('filename:', file.name, isVideo(file.name));
    //   if (!isVideo(file.name)) file.deselect();
    //   else {
    //     file.select();
    //   }
    // });
    // engine.destroy(() => {});
    engine.on('ready', () => {
      engine.files.forEach((file) => {
        console.log('filename:', file.name, isVideo(file.name));
        if (isVideo(file.name)) {
          file.createReadStream();
          file = file;
        }
      });
    });

    engine.on('download', (pieceIndex) => {
      console.log(`Index= ${pieceIndex} - `, Math.floor((engine.swarm.downloaded / size_bytes) * 100), ' %');
    });
    engine.on('idle', () => {
      // file.createReadStream();
      console.log('idle DONE', file);
    });
  };

  // @middlewaresBinding(['isAuthorize'])
  async getSub(req: express.Request, res: express.Response, next: any) {
    // const { lang } = req.user;
    const lang = 'fre';
    const { imdbId } = req.params;
    const { OpenSubtitles, buildPath } = Utils;
    try {
      const subs = await OpenSubtitles.search({
        imdbid: imdbId,
        sublanguageid: [lang, 'eng'].join(),
      });
      const sub = _.reduce(subs, (acc, value, key) => value, {});
      const { data } = await axios({
        method: 'get',
        url: sub.url,
        responseType: 'stream',
      });
      const pathSubs = buildPath(imdbId);
      data.pipe(fs.createWriteStream(`${pathSubs}.srt`))
          .on('finish', () => {
            fs.createReadStream(`${pathSubs}.srt`)
              .pipe(str2vtt())
              .pipe(fs.createWriteStream(`${pathSubs}.vtt`))
              .on('finish', () => {
                fs.unlink(`${pathSubs}.srt`, () => {});
                res.json({ path: `${pathSubs}.vtt` });
              });
            });
    } catch(err) {
      next({ type: 'Torrent', details: 'failed to get sub', err });
    }
  };
}
export default VideoController;

// function mkdirp(filepath) {
//   var dirname = path.dirname(filepath);

//   if (!fs.existsSync(dirname)) {
//       mkdirp(dirname);
//   }

//   fs.mkdirSync(filepath);
// }
