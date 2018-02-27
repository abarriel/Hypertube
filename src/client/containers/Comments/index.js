import React from 'react';
import {
  number,
  object,
} from 'prop-types';
import {
  compose,
  lifecycle,
} from 'recompose';

import req from '../../request';
import {
  CommentsContainer,
} from './styles';

const Comments = ({
  height,
  comments,
}) => (
  <CommentsContainer height={height}>
  </CommentsContainer>
);

Comments.propTypes = {
  height: number.isRequired,
  comment: object,
};

const enhance = compose(

  lifecycle({
    componentDidMount() {
      req.getComments(this.props.imdbId)
        .then(comments => console.log('comments: ', comments));
    },
  }),
);

export default enhance(Comments);

