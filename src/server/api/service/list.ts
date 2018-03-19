import * as _ from 'lodash';
import * as express from 'express';

import middlewaresBinding from '../middleware';
import { Users, Movies, List } from '../../database/queries';

class ListController {
  name = 'list';

  @middlewaresBinding(['isAuthorize'])
  async getList(req: express.Request, res: express.Response, next: any) {
    try {
      const { id } = req.user;
      const { list } = req.params;
      if (!_.includes(['history', 'my_list'], list)) return next({ type: 'validation', details: 'Wrong list provided' });
      const listIds = await Users.single({ id, columns: [list] });
      const myList = await Movies.ids(listIds.myList || listIds.history);
      res.json(myList);
    } catch (err) {
      next({ type: 'db', details: 'failed to get the list list', err });
    }
  }

  @middlewaresBinding(['isAuthorize'])
  async add(req: express.Request, res: express.Response, next: any) {
    const { imdbId, list } = req.params;
    const { id } = req.user;
    try {
      if (!/[a-zA-Z0-9]{2,20}/.test(imdbId)) return next({ type: 'validation', details: 'Wrong imdb Id provided' });
      if (!_.includes(['history', 'my_list'], list)) return next({ type: 'validation', details: 'Wrong list provided' });
      await List.add(id, imdbId, list);
      res.json({ status: 'OK' });
    } catch (err) {
      next({ type: 'db', details: 'failed to add movie in your list', err });
    }
  };

  @middlewaresBinding(['isAuthorize'])
  async deleteMovie(req: express.Request, res: express.Response, next: any) {
    const { imdbId, list } = req.params;
    const { id } = req.user;
    try {
      if (!/[a-zA-Z0-9]{2,20}/.test(imdbId)) return next({ type: 'validation', details: 'Wrong imdb Id provided' });
      if (!_.includes(['history', 'my_list'], list)) return next({ type: 'validation', details: 'Wrong list provided' });
      await List.delete(id, imdbId, list);
      res.json({ status: 'OK' });
    } catch (err) {
      next({ type: 'db', details: 'failed to delete movie in your list', err });
    }
  };
}
export default ListController;
