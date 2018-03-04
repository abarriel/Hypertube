import * as _ from 'lodash';
import * as express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import middlewaresBinding from '../middleware';
import * as jsonframe from 'jsonframe-cheerio';

const SHOW = 'tv_show';
const EPISODE = 'episode';
const MOVIE = 'movie';
const YEARSTV = 'years';
const NEED_INT_CAST = ['year', 'imdbRating', 'popularity', 'metascore', 'seasons', 'episode'];
const KEY_MOVIE = []
// title, imdbShowId, showName, season, episode, year, years, released, genre, director, writers, production, actors, resume, runtime, country, imdbRating, popularity, metascore, poster, type, seasons,

const KEY_SHOW = []
const KEY_EPISODE = []
class imdbId {
  name = 'imdb';

  async scrapper(req: express.Request, res: express.Response) {
    const { imdbId } = req.params
    const { data } = await axios.get(`http://www.imdb.com/title/${imdbId}`);
    const $ = cheerio.load(data);
    jsonframe($);

    const frame = {
      title: '.title_wrapper h1:first-child || .+?(?=\\([0-9]{4}\\)) | trim',
      imdbShowId: '.titleParent a @ href || title\\/(.+?)(?=\\?)',
      showName: '.titleParent a @ title',
      season: '.button_panel.navigation_panel div:first-child .bp_heading:has(.ghost) | nb || .+?(?= )',
      episode: '.button_panel.navigation_panel div:first-child .bp_heading:has(.ghost) | nb || \\d{1,}$',
      year: 'a[href*="releaseinfo?ref_=tt_ov_inf"] meta[itemprop=datePublished] @ content || [0-9]{4}',
      years: ['.seasons-and-year-nav a[href*="tt_eps_yr_"]'],
      released: 'a[href*="releaseinfo?ref_=tt_ov_inf"] meta[itemprop=datePublished] @ content',
      genre: ['span[itemprop=genre]'],
      director: '.plot_summary_wrapper a[href*="ov_dr"] span[itemprop=name]',
      writers: ['.credit_summary_item span[itemprop=creator] a'],
      production: ['#titleDetails span[itemprop=creator]'],
      actors: ['.cast_list span[itemprop=name]'],
      resume: '.article [itemprop=description] || .+?(?=Written by) | trim',
      runtime: '.title_wrapper time[itemprop=duration] @ datetime',
      country: 'a[href*="primary_language"]:first-of-type',
      imdbRating: '.ratingValue span[itemprop=ratingValue]',
      popularity: 'div[class*="popularityTrend"] ~ div | nb || .+?(?= )',
      metascore: '.titleReviewBarItem a[href*="ov_rt"] span',
      poster: 'link[rel="image_src"] @ href',
      type: 'meta[property="og:type"] @ content || \\.(.*)',
      seasons: '.seasons-and-year-nav a[href*="season"]',
    };

    const _infos = $('html').scrape(frame);
    if (_infos.type !== 'tv_show')
    delete _infos.years;
    const infos = { imdbId, ..._infos };
    const infosCast = _.reduce(infos, (acc: {}, value: any, key: string) => {
       if (NEED_INT_CAST.includes(key))
          return { ...acc, [key]: value * 1};
      if (key === 'years')
          return { ...acc, [key]: value.map(Number)};
      return { ...acc, [key]: value };
    } , {});
    // const infosCast = _.map(infos, (v:any, k:any) => {
    //   if (allInteger.includes(k))
    //       return { v: k * 1 };
    //   return { k : k };
    // })
    res.json(infosCast);
  }

};

export default imdbId;
