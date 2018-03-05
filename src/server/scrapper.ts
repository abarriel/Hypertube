import { DB, Environment } from './core';
import { createMoviesTable, deleteMovieTable } from './database/migrations/movies';
import * as _ from 'lodash';
import axios from 'axios';
import * as https from 'https';
import * as Promise from 'bluebird';

/**
 *
 * query-string made home
 * @param {movieNub}
 * @param {params} // Object
**/
const parsifyParams = (params: object) => _.reduce(params, (res, value, key) => `${res}${res ? '&' : ''}${key}=${value}`, '');


const YTS_URL = 'https://yts.am/api/v2/list_movies.json';
const YTS_DETAIL = 'https://yts.am/api/v2/movie_details.json?movie_id=6941';

/**
 *
 * omdb url with a  API key registered.
 * @param {imdbId}
**/
const omdbUrl = (imdbId: string) => `http://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${Environment.getConfig().omdb}`;

/**
 *
 * addMovie
 * @param {movieNub} // details from movieNub
 * @param {movie} // details from YTS
**/
const addMovie = async (movieNub: any, movie: any) => {
  console.log(movieNub.Title);
  const seeds = _.reduce(movie.torrents, (acc, v) => (acc + (v ? v.seeds : 0)), 0);
  return await DB('movies').insert({
    imdb_id: movieNub.imdbID,
    title: movieNub.Title,
    year: parseInt(movieNub.Year) ? parseInt(movieNub.Year) : null,
    trailer: movie.yt_trailer_code,
    released: movieNub.Released === 'N/A' ? null : movieNub.Released,
    country: movieNub.Country,
    awards: movieNub.Awards === 'N/A' ? null : movieNub.Awards,
    dvd: movieNub.DVD === 'N/A' ? null : movieNub.DVD,
    language: movieNub.language,
    imdb_rating: Math.round((Math.round(movieNub.imdbRating) / 2)),
    score: parseInt(movieNub.Metascore) ? parseInt(movieNub.Metascore) : null,
    cover_image: movieNub.Poster,
    background_image: movie.background_image,
    summary: movieNub.Plot,
    genres: movie.genres,
    seeds: seeds ? seeds : null,
    torrents: movie.torrents,
    pg: movieNub.Rated,
    runtime: parseInt(movie.runtime) ? parseInt(movie.runtime) : null,
    director: movieNub.Director,
    actors: _.split(movieNub.Actors, ','),
    ratings: movieNub.Ratings,
    type: 'movie',
    box_office: movieNub.BoxOffice,
    production: movieNub.Production
  });
}

/**
 *
 * Scrap for YTS for torrents details and OMDB API for details.
 *
**/

const scrapYTS = async () => {
  await deleteMovieTable();
  await createMoviesTable();

  const params = {
    limit: 50,
    page: 1,
    sort_by: 'download_count',
  };
  const agent = new https.Agent({
    rejectUnauthorized: false
  });
  const { data: { data: { movies, movie_count } } } = await axios.get(`${YTS_URL}?${parsifyParams(params)}`, { httpsAgent: agent } );
  const pageNumber = Math.round(movie_count / params.limit);
  const promisesT = _.times(pageNumber, async (num) => {
    if (num < 1) return ;
    params.page = num;
    const { data: { data: { movies } } } = await axios.get(`${YTS_URL}?${parsifyParams(params)}`, { httpsAgent: agent });
    const promises = _.map(movies, async (movie: any) => {
      try {
        const { data: movieNub } = await axios.get(omdbUrl(movie.imdb_code));
        await addMovie(movieNub, movie);
      } catch (err) {
        console.log('err', err);
      }
    })
    return Promise.all(promises);
  });
  return Promise.all(promisesT);
}

const EZTV = (page: number) => `https://eztv.ag/api/get-torrents?limit=100&page=${page}`;

const scrapEZTV = async () => {
  const { data: { torrents_count } } = await axios.get(EZTV(1));
  const pageNumber = 2 || Math.round(torrents_count / 100);
  let tvShows:any = [];
  const promiseT = _.times(pageNumber, async (num) => {
    if (num < 1) return ;
      return axios.get(EZTV(num)).then(({ data }) => {
        return Promise.map(data.torrents, (v) => {
            return axios.get(`http://95.85.22.142:8087/title/tt${v.imdb_id}`);
        });
        // console.log(num);
        // _.map(data.torrents, (v) => {
        // tvShows.push(v);
        // })
      }).catch(e => e);
  });
  await Promise.all(promiseT);
  console.log('tvShows Count ', tvShows.length);
}

/*
 *
 *  InitScrapper
  */

const initScrapper = async () => {
  // const { OpenSubtitles } = Utils;

  // await scrapYTS();
  await scrapEZTV();
  console.log('Done scrapping');
};

export default initScrapper;
