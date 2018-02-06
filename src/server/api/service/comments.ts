import * as _ from 'lodash';
import * as express from 'express';

import middlewaresBinding from '../middleware';
import { Comments, Movies } from '../../database/queries';

class CommentsController {
  name = 'comments';

  @middlewaresBinding(['isAuthorize', 'commentsValidate'])
  async gets(req: express.Request, res: express.Response) {
    const { comment, limit, offset } = req.app.locals;
    const comments = await Comments.gets(comment.imdbId, limit, offset);
    res.json(comments);
  }

  @middlewaresBinding(['isAuthorize', 'commentsValidate'])
  async add(req: express.Request, res: express.Response, next: any) {
    const { comment } = req.app.locals;
    const { username, id: userId } = req.user;
    try {
      const movie = await Movies.single(comment.imdbId);
      await Comments.post({ ...comment, username, userId });
      res.json({ status: 'Comments Added' });
    } catch (err) {
      console.log(err);
      next({ type: 'db', details: 'failed to add comment', err });
    }
  };
};

export default CommentsController;
