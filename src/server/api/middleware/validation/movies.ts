import * as _ from 'lodash';
import * as express from 'express';
import * as Joi from 'joi';
import * as querystring from 'querystring';

const genreMovies = [
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Documentary',
  'Drama',
  'Family',
  'Fantasy',
  'Film-Noir',
  'History',
  'Horror',
  'Music',
  'Musical',
  'Mystery',
  'Mews',
  'Reality-TV',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Thriller',
  'War',
  'Western'
];

const sortOptions = [
  'date',
  'score',
  'seeds',
  'runtime',
];

const MoviesFilterSchema = Joi.object({
  limit: Joi.number().integer().min(0).max(50),
  offset: Joi.number().integer().min(0),
  genres: Joi.array().unique().items(Joi.string().valid(genreMovies)),
  years: Joi.array().items(Joi.number().integer().min(1900).max(new Date().getFullYear())),
  ratings: Joi.array().items(Joi.number().integer().min(0).max(5)),
  q: Joi.string().optional().replace(/\s+/g, ' ').trim().max(100).truncate().normalize().regex(/^[a-z0-9 ]+$/i),
  sort: Joi.array().ordered(Joi.string().valid(sortOptions), Joi.string().insensitive().valid(['asc', 'desc']))
});

const moviesFormValidate = async (req: express.Request, res: express.Response, next: express.next) => {
  const { query } = req;
  const { q, limit, offset, genres, years, ratings, sort } = query;
  const params: any = {};

  params.limit = limit ? parseInt(limit) : 50;
  params.offset = offset ? parseInt(offset) : 0;
  params.genres = genres ? _.split(genres, ',') : [];
  params.q = q;

  params.sort = sort ? _.split(sort, '.') : [];

  params.years = years ? _.split(years, ',') : [];
  params.years[0] = params.years[0] ? params.years[0] : 1900;
  params.years[1] = params.years[1] ? params.years[1] : params.years[0] === 1900 ? new Date().getFullYear() : params.years[0];

  params.ratings = ratings ? _.split(ratings, ',') : [];
  params.ratings[0] = params.ratings[0] ? params.ratings[0] : 0;
  params.ratings[1] = params.ratings[1] ? params.ratings[1] : params.ratings[0] === 0 ? 5 : params.ratings[0];

  try {
    const filters: any= await Joi.validate(params, MoviesFilterSchema);
    req.app.locals = {  ...req.app.locals, filters };
    next();
  } catch (err) {
    next({ type: 'JoiSchema', err });
  };
};

export {
  moviesFormValidate,
}
