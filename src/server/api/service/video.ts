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

let getSub:any = [];

class VideoController {
  name = 'video';

  @middlewaresBinding(['videoValidate'])
  async getVideo(req: express.Request, res: express.Response, next: any) {
    const { getStreamTorrent } = Utils;
    let { video: { start, end, imdbId } } = req.app.locals;
    if (_.isEmpty(getSub) || !_.includes(getSub, imdbId)) this.getSub(req, res, next);
    getSub.push(imdbId);
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
    movieStream.createReadStream(stream_position).pipe(res);
  };

  async getSub(req: express.Request, res: express.Response, next: any) {
    const lang = 'fre';
    const { imdbId } = req.params;
    const { OpenSubtitles, buildPath } = Utils;
    try {
      const subsRequest = await OpenSubtitles.search({
        imdbid: imdbId,
        sublanguageid: [lang, 'eng'].join(),
      });
      const subs = _.reduce(subsRequest, (acc, value, key) => ({...acc, [value.langcode]: value}), {});
     const subsArry = await Promise.all(_.map(subs, async (value) => {
        const { data } = await axios({
          method: 'get',
          url: value.url,
          responseType: 'stream',
        });
        const pathSubs = buildPath(imdbId, value.langcode);
        data.pipe(fs.createWriteStream(`${pathSubs}.srt`))
        .on('finish', () => {
          fs.createReadStream(`${pathSubs}.srt`)
          .pipe(str2vtt())
          .pipe(fs.createWriteStream(`${pathSubs}.vtt`))
          .on('finish', () => {
            fs.unlink(`${pathSubs}.srt`, () => {});
            // res.json({ path: `${pathSubs}.vtt` });
          });
        });
      }))
      await Promise.all(subsArry);
    } catch(err) {
      // next({ type: 'Torrent', details: 'failed to get sub', err });
    }
  };
}
export default VideoController;
