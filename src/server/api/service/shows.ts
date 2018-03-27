import * as _ from 'lodash';
import * as express from 'express';

import middlewaresBinding from '../middleware';
import { Shows } from '../../database/queries';

// const previewMovieInfos = ['imdb_id', 'title', 'year', 'imdb_rating', 'cover_image', 'summary'];

class ShowsController {
  name = 'shows';

  @middlewaresBinding(['isAuthorize'])
  async single(req: express.Request, res: express.Response, next: any) {
    const { id } = req.params;
    if (!/[a-zA-Z0-9]{2,20}/.test(id))
      return next({ type: 'validation', details: 'shows Wrong Id provided' });
    const show = await Shows.single(id);
    const { myList, history } = req.user;
    res.json({ movie: { ...show, inMyList: _.includes(myList, id), seen: _.includes(history, id) } });
  }
};

export default ShowsController;
