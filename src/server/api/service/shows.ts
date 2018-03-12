import * as _ from 'lodash';
import * as express from 'express';

import middlewaresBinding from '../middleware';
import { Shows } from '../../database/queries';

// const previewMovieInfos = ['imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary'];

class ShowsController {
  name = 'shows';

  // @middlewaresBinding(['isAuthorize'])
  async single(req: express.Request, res: express.Response, next: any) {
    const { id } = req.params;
    const { extended } = req.query;
    if (!/[a-zA-Z0-9]{2,20}/.test(id))
      return next({ type: 'validation', details: 'Wrong Id provided' });
    if (extended === 'full') return this.extended(req, res, next);
    const show = await Shows.single(id);
    const { myList, history } = req.user;
    res.json({ movie: { ...show, inMyList: _.includes(myList, id), seen: _.includes(history, id) } });
  }

  async extended(req: express.Request, res: express.Response, next: any) {
    const { id } = req.params;
    const show = await Shows.single(id);
    const allEpisode = await Shows.getFullEpisodes(id);
    console.log(allEpisode);
    // const groupBySeasons = _.groupBy(allEpisode, 'season');
    // console.log(_.map(groupBySeasons, (season) => _.keyBy(season, 'episode')))
    // const { myList, history } = req.user;
    // res.json({ movie: { ...show, inMyList: _.includes(myList, id), seen: _.includes(history, id) } });
  }
};

export default ShowsController;
