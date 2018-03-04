import { Environment, DB } from './core';
import * as cron from 'cron';
import initDb from './database';
import initScrapper from './scrapper';
import initServer from './api';
import axios from 'axios';
/**
 * Init chain of the server. DB -> HTTP
 *
 * @param {Config DB}
 */
const scrapperJob = new cron.CronJob({
  cronTime: '0 0 * * 1',
  onTick: initScrapper,
  runOnInit: true,
})

 const init =  async () => {
  try {
    await initDb();
    await initServer(Environment.getConfig());
    // await axios.get('http://localhost:8888/api/imdb/tt0110912');
    // await axios.get('http://localhost:8888/api/imdb/tt0306414');
    // await axios.get('http://localhost:8888/api/imdb/tt0749451/');
    // scrapperJob.start();
  } catch (err) {
    console.log(err);
  }
}

init();
