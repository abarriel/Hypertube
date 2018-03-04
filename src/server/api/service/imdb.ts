import * as _ from 'lodash';
import * as express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import middlewaresBinding from '../middleware';

let d = {
    "title": 'Nan',
    "year": 'Nan',
    "plot": 'Nan',
    "plotKeywords": 'Nan',
    "genre": 'Nan',
    "country": 'Nan',
    "language": 'Nan',
    "released": 'Nan',
    "runtime": 'Nan',
    "writer": 'Nan',
    "actors": 'Nan',
    "poster": 'Nan',
    "imdbRating": 'Nan',
    "imdbVotes": 'Nan',
    "imdbID": 'Nan',
    "type": 'Nan',

    "director": 'Nan',
    "metascore": 'Nan',

    "popularity": 'Nan',
    "creators": 'Nan',
    "totalSeasons": 'Nan',
}

class imdbId {
  name = 'imdb';

  async scrapper(req: express.Request, res: express.Response) {
    const { imdbId } = req.params
    const { data } = await axios.get(`http://www.imdb.com/title/${imdbId}`);
    const $ = cheerio.load(data);
    // const { dataPlotKeywords } =

    // d.title = $('.title_wrapper h1:first-child').text(); // contain name and year

    // SHARABLE
    d.title = $('.originalTitle').text() .split('(original title')[0].trim()
    d.plot = $('[itemprop=description]').text().replace(/\s\s+|Written by\n.*/gi, ' ').trim();
    d.genre = $('span[itemprop=genre]').map((i,el) => $(el).text()).get(); // loooook i was tired haha
    d.country = $('#titleDetails a[href*="country_of_origin"]').text();
    d.language = $('#titleDetails a[href*="primary_language"]:first-of-type').text();
    // d.released = $('#titleDetails div:nth-of-type(4)').text();
    d.released = $('meta[itemprop=datePublished]').attr("content");
    d.runtime = $('.title_wrapper time[itemprop=duration]').attr('datetime')
    d.writer =  $('.plot_summary_wrapper a[href*="ov_wr"] span[itemprop=name]').map((i,el) => $(el).text()).get();
    d.actors =  $('.cast_list span[itemprop=name]').map((i,el) => $(el).text()).get();
    d.poster = $('meta[property="og:image"]').attr('content')
    d.imdbRating = $('.ratingValue span[itemprop=ratingValue]').text()
    d.imdbID = imdbId;
    d.type =  $('meta[property="og:type"]').attr('content').split('.')[1];
    d.imdbVotes = $('span[itemprop=ratingCount]').text();

    // movie
    d.director = $('.plot_summary_wrapper a[href*="ov_dr"] span[itemprop=name]').map((i,el) => $(el).text()).get().join(', ');
    d.metascore = $('.titleReviewBarItem a[href*="ov_rt"] span').text()
    d.year = $('a[href*="releaseinfo?ref_=tt_ov_inf"]').text();

    // tvshow
    d.creators = d.writer;
  d.popularity = $('div[class*="popularityTrend"] ~ div').text().match(/[0-9].*/)[0];
    d.totalSeasons = $('.seasons-and-year-nav a[href*="season"]').contents().length;
    // sharable
    d.plotKeywords = $('[itemprop=keywords] nobr a').attr('href');
    const { data: dataPlotKeywords } =  await axios.get(`http://www.imdb.com${d.plotKeywords}`);
    const $$ = cheerio.load(dataPlotKeywords);
    d.plotKeywords = $$('table .sodatext a').map((i,el) => $(el).text()).get();

    console.log(d);
    // res.json(comments);
    res.json({ o: 'o' });
  }

};

export default imdbId;
