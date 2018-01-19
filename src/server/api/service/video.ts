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
    const file = './public/upload/tt0110912/torrent/Pulp Fiction (1994)/Pulp.Fiction.1994.720p.BrRip.x264.YIFY.mp4';
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
    if (!/\w{5,20}/.test(imdbId)) return next({ type: 'validation', details: 'Wrong ImdbId provided' });
    const { getStreamTorrent } = Utils;
    const { torrents } = await Movies.single(imdbId);
    const { hash, size_bytes } = torrents[0];
    const movieStream: any = await getStreamTorrent(hash, imdbId);

    const range: any = req.headers.range;
    console.log('range ', range);
    if (!range) return next({ type: 'Torrent', details: 'Range not provided' });
    const positions = range.replace(/bytes=/, '').split('-');
    const start = parseInt(positions[0], 10);
    const file_size = movieStream.size;
    const end = positions[1] ? parseInt(positions[1], 10) : file_size - 1;
    const chunksize = (end - start) + 1;
    const head = {
      'Content-Range': 'bytes ' + start + '-' + end + '/' + file_size,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4'
    };
    res.writeHead(206, head);
    //  Create the createReadStream option object so createReadStream knows how much data it should be read from the file.
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
