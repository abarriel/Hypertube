import React from 'react';
import { connect } from 'react-redux';
import {
  number,
  object,
  string,
  array,
  func,
} from 'prop-types';
import { map } from 'lodash';
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
  Comment,
  SendButton,
  CommentAvatar,
  CommentText,
} from './styles';

const propTypes = {
  height: number.isRequired,
  user: object.isRequired,
  comments: array,
  value: string.isRequired,
  handleChangeValue: func.isRequired,
  imdbId: string.isRequired,
  addComment: func.isRequired,
};

const Comments = ({
  height,
  comments,
  user,
  value,
  handleChangeValue,
  addComment,
  imdbId,
}) => (
  <CommentsContainer height={height}>
    {console.log('comments: ', comments)}
    {console.log('value: ', value)}
    <CommentsContent>
      {map(comments, comment => (
        <Comment key={comment.id}>
          <CommentAvatar />
          <CommentText>{comment.body || 'Empty comment'}</CommentText>
        </Comment>
      ))}
    </CommentsContent>
    <PostCommentContainer>
      <Avatar avatar={user.profilePicture} />
      <InputStyled
        value={value}
        onChange={e => handleChangeValue(e.target.value)}
      />
      <SendButton
        onClick={() => {
          req.addComment(imdbId, value);
          addComment(value);
          handleChangeValue('');
        }}
      >
        Send
      </SendButton>
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
      value: '',
    }),
    {
      loadComments: () => comments => ({ comments }),
      handleChangeValue: () => newValue => ({ value: newValue }),
      addComment: ({ comments }) => newComment => ({ comments: [...comments, { id: comments[comments.length - 1].id + 1, body: newComment }] }),
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

