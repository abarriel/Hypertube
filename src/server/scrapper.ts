import { DB, Environment } from './core';
import { createMoviesTable, deleteMovieTable } from './database/migrations/movies';
import * as _ from 'lodash';
import axios from 'axios';


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
const omdbUrl = (imdbId: string) => `http://www.omdbapi.com/?i=${imdbId}&apikey=${Environment.getConfig().omdb}`;

/**
 *
 * addMovie
 * @param {movieNub} // details from movieNub
 * @param {movie} // details from YTS
**/
const addMovie = async (movieNub: any, movie: any) => {
  await DB('movies').insert({
    imdb_id: movieNub.imdbID,
    title: movieNub.Title,
    year: movieNub.Year,
    imdb_rating: movieNub.imdbRating,
    cover_image: movieNub.Poster,
    background_image: movie.background_image,
    summary: movie.description_full,
    genres: movie.genres,
    torrents: movie.torrents,
    pg: movie.mpa_rating,
    runtime: movieNub.Runtime,
    director: movieNub.Director,
    actors: _.split(movieNub.Actors, ','),
    ratings: movieNub.Ratings,
    box_office: movieNub.BoxOffice,
    production: movieNub.Production
  });
  await DB('movies_miniature').insert({
    imdb_id: movieNub.imdbID,
    title: movieNub.Title,
    year: movieNub.Year,
    imdb_rating: movieNub.imdbRating,
    cover_image: movieNub.Poster,
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

  const { data: { data: { movies, movie_count } } } = await axios.get(`${YTS_URL}?${parsifyParams(params)}`);
  const pageNumber = movie_count / params.limit;
  _.times(pageNumber, async (num) => {
    if (num < 1) return ;
    params.page = num;
    const { data: { data: { movies } } } = await axios.get(`${YTS_URL}?${parsifyParams(params)}`);
    _.forEach(movies, async (movie) => {
      try {
        const { data: movieNub } = await axios.get(omdbUrl(movie.imdb_code));
        console.log(movieNub.title, 'pg:', params.page, 'pgExecpted:', pageNumber);
        await addMovie(movieNub, movie);
      } catch (err) {
        console.log('ERROR SCRAPPER', err.code,);
      }
    })
  });
}

/**
 *
 *  InitScrapper
 */

const initScrapper = async () => {
  await scrapYTS();
  console.log('done scrapping');
};

export default initScrapper;