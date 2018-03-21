import React from 'react';
import { connect } from 'react-redux';
import {
  number,
  object,
} from 'prop-types';
import {
  compose,
  lifecycle,
  withStateHandlers,
} from 'recompose';

import { getUser } from '../../selectors/user';
import req from '../../request';
import {
  CommentsContainer,
  CommentsContent,
  PostCommentContainer,
  Avatar,
  InputStyled,
} from './styles';

const propTypes = {
  height: number.isRequired,
  user: object.isRequired,
  comment: object,
};

const Comments = ({
  height,
  comments,
  user,
}) => (
  <CommentsContainer height={height}>
    <CommentsContent>
    </CommentsContent>
    <PostCommentContainer>
      <Avatar avatar={user.profilePicture} />
      <InputStyled />
    </PostCommentContainer>
  </CommentsContainer>
);

Comments.propTypes = propTypes;

const mapStateToProps = state => ({
  user: getUser(state),
});

const enhance = compose(
  connect(mapStateToProps),
  withStateHandlers(
    ({
      comments: [],
    }),
    {
      loadComments: () => comments => ({ comments }),
    },
  ),
  lifecycle({
    componentDidMount() {
      req.getComments(this.props.imdbId)
        .then(comments => this.props.loadComments(comments));
    },
  }),
);

export default enhance(Comments);

