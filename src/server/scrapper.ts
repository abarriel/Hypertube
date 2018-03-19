import { DB, Environment } from './core';
import { createMoviesTable, deleteMovieTable } from './database/migrations/movies';
import { createEpisodeTable, deleteEpisodeTable } from './database/migrations/episode';
import { createShowsTable, deleteShowsTable } from './database/migrations/shows';
import * as _ from 'lodash';
import axios, { AxiosInstance } from 'axios';
import * as https from 'https';
import * as Promise from 'bluebird';
import * as colors from 'colors/safe';
import * as moment from 'moment';
import CommentsController from './api/service/comments';

/**
 *
 * query-string made home
 * @param {movieNub}
 * @param {params} // Object
 **/
const parsifyParams = (params: object) => _.reduce(params, (res, value, key) => `${res}${res ? '&' : ''}${key}=${value}`, '');

const YTS_URL = 'https://yts.am/api/v2/list_movies.json';
const YTS_DETAIL = 'https://yts.am/api/v2/movie_details.json?movie_id=6941';

const EZTV = (page: number) => `http://95.85.22.142:3001/api/get-torrents?limit=100&page=${page}`;

/**
 *
 * omdb url with a API key registered.
 * @param {imdbId}
**/
const omdbUrl = (imdbId: string) => `http://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${Environment.getConfig().omdb}`;

/**
 *
 * insertMovieInDb
 * @param {movieNub} // details from movieNub
 * @param {movie} // details from YTS
**/
const insertMovieInDb = (movie: any) => {
  console.log('movie:', movie.Title);
  DB('movies').insert(_.pickBy({
    imdb_id: movie.imdbID,
    title: movie.Title,
    year: parseInt(movie.Year),
    trailer: movie.yt_trailer_code,
    first_aired: moment(movie.Released, 'DD MMM YYYY').format('YYYY-MM-DD'),
    released: movie.Released,
    country: movie.Country,
    awards: movie.Awards,
    language: movie.language,
    imdb_rating: Math.round((Math.round(movie.imdbRating) / 2)),
    score: parseInt(movie.Metascore),
    cover_image: movie.poster_path ? `http://image.tmdb.org/t/p/w780/${movie.poster_path}` : null,
    background_image: movie.backdrop_path ? `http://image.tmdb.org/t/p/w780/${movie.backdrop_path}` : null,
    summary: movie.Plot,
    genres: _.isEmpty(movie.genres) ? (movie.Genre ? _.split(movie.Genre.replace(/\s+/g, ''), ',') : []) : movie.genres,
    seeds: _.reduce(movie.torrents, (acc, v) => (acc + (v ? v.seeds : 0)), 0),
    torrents: movie.torrents,
    pg: movie.Rated,
    runtime: parseInt(movie.runtime),
    director: movie.Director,
    actors: movie.Actors ? _.split(movie.Actors.replace(/\s+/g, ''), ',') : [],
    ratings: movie.Ratings,
    type: 'movie',
    box_office: movie.BoxOffice,
    production: movie.Production
  }, (v) => !((v === 'N/A' || (typeof v === 'number' && isNaN(v)))))).catch(e => console.log(colors.red('[ERROR]'), movie.title, movie.id, e.toString().substr('\n').split('- null value in column')[1]))
};

const params = {
  limit: 50,
  page: 1,
  sort_by: 'download_count',
};

const agent = new https.Agent({
  rejectUnauthorized: false
});

/**
 *
 * Scrap for YTS for torrents details and OMDB API for details.
 *
**/
let moviesYTS:any = [];
const getMovieTMDB = async (tmdbId: string) => axiosApiTMDB({ url: `3/movie/${tmdbId}` });

const scrapYTS = async () => {
  await deleteMovieTable();
  await createMoviesTable();

  const { data: { data: { movies, movie_count } } } = await axios.get(`${YTS_URL}?${parsifyParams(params)}`, { httpsAgent: agent } );
  const pageNumber = Math.round(movie_count / params.limit) + 2;

  // I have to map, because only map has the option concurrency, using Promise.reduce clean me the functional part, but I lost my control over calls. (fixable)
  await Promise.map(_.range(pageNumber), async (page) => {
    if (page >= 1)
    return axios.get(`${YTS_URL}?${parsifyParams({...params, page })}`, { httpsAgent: agent })
          .then(({ data: { data: { movies } } }) => moviesYTS = [...moviesYTS, ...movies])
          .catch(e => e)}, { concurrency: 9 });

  await Promise.mapSeries(moviesYTS, (movieYTS: any) => axios.get(omdbUrl(movieYTS.imdb_code))
    .then(({ data: imdbInfos }) => ({ movieDetail: { ...movieYTS, ...imdbInfos } }))
    .then(({ movieDetail }) => findTmdb(movieYTS.imdb_code)
      .then(({ data: { movie_results } }) => {
        if (_.isEmpty(movie_results)) throw 'no data';
        return getMovieTMDB(movie_results[0].id).then(({ data: MovieInfo }) => ({ ...movieDetail, backdrop_path: MovieInfo.backdrop_path, poster_path: MovieInfo.poster_path }));
      }))
    .then(movieData => insertMovieInDb(movieData))
    .catch(e => console.error(e)))
}

const headers = (TrakTv: any) => ({
  'Content-Type': 'application/json',
  'trakt-api-version': '2',
  'trakt-api-key': TrakTv.clientID,
  'Authorization': `Bearer ${TrakTv.access_token}`
});

const axiosApiTrakt:any = axios.create({
  baseURL: 'https://api.trakt.tv/search/imdb/',
  headers: headers(Environment.getConfig().TrakTv)
});

const TraktURL = async (imdbId: string) => axiosApiTrakt({ url: `${imdbId}?type=episode&extended=full` });

const axiosApiTMDB:any = axios.create({
  baseURL: 'http://95.85.22.142:3002' || 'https://api.themoviedb.org/3',
  params: {
    api_key: Environment.getConfig().tmdb,
    language: 'en-US',
  }
});

const findTmdb = async (imdbId: string) => axiosApiTMDB({ url: `3/find/${imdbId}`, params: { external_source: 'imdb_id' } });
const getShowTmdb = async (tmdbId: string) => axiosApiTMDB({ url: `3/tv/${tmdbId}` });
const getEpisodeTmdb = async (showId: number, season: string, episode: string) => axiosApiTMDB({ url: `3/tv/${showId}/season/${season}/episode/${episode}` });

  const addShows = (show: any) => {
    console.log('show:', show.name);
    return DB('shows').insert(_.pickBy({
    imdb_id: show.id,
    title: show.name,
    trailer: null,
    first_aired: show.first_air_date,
    year: show.first_air_date && show.first_air_date.length > 5 ? parseInt(show.first_air_date) : 0,
    last_aired: show.last_air_date,
    country: _.isArray(show.origin_country) ? show.origin_country[0] : null,
    in_production: show.in_production,
    language: show.original_language,
    imdb_rating: Math.round((Math.round(show.vote_average) / 2)),
    rating: parseInt(show.vote_average),
    cover_image: show.poster_path ? `http://image.tmdb.org/t/p/w780/${show.poster_path}` : null,
    background_image: show.backdrop_path ? `http://image.tmdb.org/t/p/w780/${show.backdrop_path}` : null,
    summary: show.overview,
    genres: _.reduce(show.genres, (acc, v) => ([...acc, v.name]),[]),
    runtime: _.isArray(show.episode_run_time) ? show.episode_run_time[0] : null,
    creators: _.reduce(show.created_by, (acc, v) => ([...acc, v.name]), []),
    episodes: show.number_of_episodes,
    seasons: show.number_of_seasons,
    score: _.clamp(parseInt(show.popularity), 100),
    type: 'shows',
    production: _.isArray(show.production_companies) && !_.isEmpty(show.production_companies[0]) ? show.production_companies[0].name : null,
  }, (v) => !((v === 'N/A' || (typeof v === 'number' && isNaN(v)))))).catch(e => console.log(colors.red('[ERROR]'), e.toString().substr('\n')))};

const addEpisode = (episode: any) => {
  console.log('episode:', episode.title || episode.id);
  return DB('episodes').insert(_.pickBy({
  imdb_id: episode.id,
  tmdb_shows_id: episode.showId,
  tmdb_shows_name: episode.showName,
  title: episode.title,
  air_date: episode.air_date,
  rating: Math.round((Math.round(episode.vote_average) / 2)),
  score: episode.vote_average,
  hash: episode.hash,
  cover_image: episode.still_path,
  summary: episode.overview,
  episode: parseInt(episode.episode),
  season: parseInt(episode.season),
  torrent: episode.torrent_url,
  magnet: episode.magnet_url,
  type: 'episode',
}, (v) => !((v === 'N/A' || (typeof v === 'number' && isNaN(v)))))).catch(e => console.log(colors.red('[ERROR]'), episode.id, e.toString().substr('\n')))};

const scrapEZTV = async () => {
  const { TrakTv: TraktTVConfig } = Environment.getConfig();
  await deleteEpisodeTable();
  await createEpisodeTable();
  await deleteShowsTable();
  await createShowsTable();
  const { data: { torrents_count } } = await axios.get(EZTV(1));
<<<<<<< HEAD
  const pageNumber = 2 || Math.round(torrents_count / 100);
=======
  const pageNumber = Math.round(torrents_count / 100) + 2;

>>>>>>> 7dadfd9295d0616c9ba6b56991ad17662c0f3dfe
  let tvShows:any = [];
  let i = 0;
  let o:any = [];
  await Promise.map(_.range(pageNumber), async (num) => {
    if (num < 1) return ;
<<<<<<< HEAD
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
=======
    return axios.get(EZTV(num))
    .then(({ data }) => {
      console.log(`scrapped(page): ${num}/${pageNumber}`);
      tvShows = [...tvShows, ..._.filter(data.torrents, ({ imdb_id, seeds, episode, season }) => seeds > 30 && imdb_id && episode !== '0' && season !== '0') ];
    })
    .catch(e => console.log(e));
  }, { concurrency: 9 });
>>>>>>> 7dadfd9295d0616c9ba6b56991ad17662c0f3dfe

  const newShows = _.reduce(_.groupBy(tvShows, 'imdb_id'), (acc, v) => ([...acc, v ]), []);
    console.log('shows available: ', torrents_count);
    console.log('shows filtered (seeds > 30 && only keep qualite with most seed)', newShows.length);
    await
    Promise.mapSeries(newShows,
      async (shows:any) => Promise.mapSeries(shows, async (episodeEZTV: any, index: number) => findTmdb(`tt${episodeEZTV.imdb_id}`)
      .then(({ data: { tv_results } }) => {
        if (_.isEmpty(tv_results)) throw 'no data';
        return getShowTmdb(tv_results[0].id).then(({ data: showInfo }) => ({ show: showInfo, episodeEZTV }));
      })
      .then(res => index != 0 ? res : addShows(res.show).then(() => res))
      .then(res => getEpisodeTmdb(res.show.id, res.episodeEZTV.season, res.episodeEZTV.episode).then(({ data }) => ({ ...res, episodeTMDB: data })).catch(e => res))
      .then((res: any) => addEpisode({ ...res.episodeTMDB, ...res.episodeEZTV, showId: res.show.id, showName: res.show.name }))
      .catch(e => console.log(e))
    ));
  }

  /*
  *
  *  InitScrapper
  */

<<<<<<< HEAD
  // await scrapYTS();
  await scrapEZTV();
=======
 const initScrapper = async () => {
   console.log('Start scrapping');
  //  await scrapYTS();
  //  await scrapEZTV();
>>>>>>> 7dadfd9295d0616c9ba6b56991ad17662c0f3dfe
  console.log('Done scrapping');
};

export default initScrapper;
