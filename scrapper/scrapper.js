import _ from 'lodash';
import axios from 'axios';
import cheerio from 'cheerio';
import jsonframe from 'jsonframe-cheerio';

const SHOW = 'tv_show';
const EPISODE = 'episode';
const MOVIE = 'movie';
const YEARSTV = 'years';
const NEED_INT_CAST = ['year', 'imdbRating', 'popularity', 'metascore', 'seasons', 'episode'];

const setkeyToNull = (elem) => _.reduce(elem, (acc, value, key) => ({ ...acc, [value]: null }), {});

const KEY_BOILERPLATE = {
  episode: ['title', 'imdbShowId', 'showName', 'season', 'episode', 'year', 'released', 'director', 'resume', 'runtime',
    'country', 'imdbRating', 'poster'],
  movie: ['title', 'year', 'released', 'director', 'resume', 'runtime', 'country', 'imdbRating', 'popularity', 'metascore', 'poster'],
  shows: ['title', 'years', 'released', 'resume', 'runtime', 'country', 'imdbRating', 'popularity', 'poster', 'seasons'],
};

const scrapper = async (req, res) => {
  const { imdbId } = req.params;
  try {
   // const { data } = await axios.get(`http://localhost:3001/title/${imdbId}`);
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

    const infos = { imdbId, ...$('html').scrape(frame) };

    if (infos.type !== SHOW) delete infos.years;

    const infosCast = _.reduce(infos, (acc, value, key) => {
      if (NEED_INT_CAST.includes(key))
        return { ...acc, [key]: value * 1 };
      if (key === 'years')
        return { ...acc, [key]: value.map(Number) };
      return { ...acc, [key]: value };
    }, {});
    const finalData = { ...setkeyToNull(KEY_BOILERPLATE[infosCast.type || 'movie']), ...infosCast };
    console.log('\x1b[32m%s\x1b[0m', `${new Date().toLocaleString()}\t${imdbId}`); 
    res.json(finalData);
  } catch (err) {
	console.log(err);  
  console.log('\x1b[31m%s\x1b[0m', `${new Date().toLocaleString()}\t${imdbId}`);
    res.json({ response: 'failed' });
  }
};

export default scrapper;
