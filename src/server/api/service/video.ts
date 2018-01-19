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

  @middlewaresBinding(['videoValidate'])
  async getVideo(req: express.Request, res: express.Response, next: any) {
    const { getStreamTorrent } = Utils;
    let { video: { start, end, imdbId } } = req.app.locals;
    const { torrents } = await Movies.single(imdbId);
    const { hash } = torrents[0];
    const movieStream: any = await getStreamTorrent(hash, imdbId);

    const file_size = movieStream.size;
    if (!end) end = file_size - 1;
    const chunksize = (end - start) + 1;
    const head = {
      'Content-Range': 'bytes ' + start + '-' + end + '/' + file_size,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4'
    };
    res.writeHead(206, head);
    const stream_position = { start, end };
    console.log('stream position ', stream_position);
    movieStream.createReadStream(stream_position).pipe(res);
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
