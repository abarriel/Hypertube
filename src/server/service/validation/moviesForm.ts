import * as _ from 'lodash';
import * as express from 'express';
import * as Joi from 'joi';

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
  'News',
  'Reality-TV',
  'Romance',
  'Sci-Fi',
  'Sport',
  'Thriller',
  'War',
  'Western'
];
const MoviesFilterSchema = Joi.object({
  limit: Joi.number().integer().min(0).max(50),
  offset: Joi.number().integer().min(0),
  genres: Joi.array().unique().items(Joi.string().valid(genreMovies))
});

const moviesFormValidate = async (req: express.Request, res: express.Response, next: express.next) => {
  const { query } = req;
  const { limit, offset, genres } = query;
  const params: any = {};

  params.limit = limit ? parseInt(limit) : 50;
  params.offset = offset ? parseInt(offset) : 0;
  params.genres = genres ? _.split(genres, ',') : [];
  try {
    const filters = await Joi.validate(params, MoviesFilterSchema);
    req.app.locals = { filters };
    next();
  } catch (err) {
    next({ type: 'JoiSchema', err });
  };
};

export {
  moviesFormValidate,
}
