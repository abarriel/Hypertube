import { Environment, DB } from './core';
import * as cron from 'cron';
import initDb from './database';
import initScrapper from './scrapper';
import initServer from './api';

/**
 * Init chain of the server. DB -> HTTP
 *
 * @param {Config DB}
 */
// const scrapperJob = new cron.CronJob({
  // cronTime: '0 0 * * 1',
  // onTick: initScrapper,
  // runOnInit: true,
// })

 const init =  async () => {
  try {
    await initDb();
    // scrapperJob.start();
    await initServer(Environment.getConfig());
  } catch (err) {
    console.log(err);
  }
}

init();
