import React from 'react';
import { number, func, object, bool, array } from 'prop-types';
import { withStateHandlers, compose } from 'recompose';
import { connect } from 'react-redux';

import { isMovieHidden } from './utils';
import { getHistory } from '../../selectors/user';
import Shadow from './Shadow';
import {
  MoviePreviewContainer,
  BackgroundImage,
} from './styles';

const propTypes = {
  movie: object.isRequired,
  start: number.isRequired,
  end: number.isRequired,
  displayShadow: bool.isRequired,
  handleChangeShadowDisplay: func.isRequired,
  index: number.isRequired,
  handleChangeIsPreviewOpen: func.isRequired,
  loadDetailsData: func.isRequired,
  history: array,
};

const MoviePreview = ({
  movie,
  start,
  end,
  displayShadow,
  handleChangeShadowDisplay,
  index,
  handleChangeIsPreviewOpen,
  loadDetailsData,
  history,
}) => (
  <MoviePreviewContainer
    onMouseEnter={() => handleChangeShadowDisplay(true)}
    onMouseLeave={() => handleChangeShadowDisplay(false)}
    hidden={isMovieHidden(index, start, end)}
    pos={index}
  >
    <BackgroundImage
      hidden={isMovieHidden(index, start, end)}
      coverImage={movie.coverImage}
      displayShadow={displayShadow}
    />
    {
      displayShadow && !isMovieHidden(index, start, end) &&
      <Shadow
        index={index}
        movie={movie}
        displayShadow={displayShadow}
        handleChangeIsPreviewOpen={handleChangeIsPreviewOpen}
        loadDetailsData={loadDetailsData}
        history={history}
      />
    }
  </MoviePreviewContainer>
);

MoviePreview.propTypes = propTypes;

const mapStateToProps = state => ({
  history: getHistory(state),
});

const enhance = compose(
  connect(mapStateToProps),
  withStateHandlers(
    {
      displayShadow: false,
    },
    {
      handleChangeShadowDisplay: () => display => ({ displayShadow: display }),
    },
  ),
);

export default enhance(MoviePreview);

