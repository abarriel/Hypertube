import express from 'express';
import compression from 'compression';

import scrapper from './scrapper';

const getUrl = (server) => `http://${server.address().address}:${server.address().port}`;

/**
 *  The Server is actually working and functional once the callback of app.listen is called.
 *  Meaning, without the console.log prompt, you can't tell server is actually functional.
 * missing .dotenv for config will implemented later
 */

const HOST = '127.0.0.1';
const PORT = '8087';

const initServer = (async () => {
  const app = await express();

  await app
    .use(compression())
    .get('/:imdbId', scrapper);
  const httpServer = await app.listen(PORT, HOST, () => {
    console.log(`[API] Server running: ${getUrl(httpServer)}`);
  });
})();


export default initServer;
