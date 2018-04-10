import React from 'react';
import { connect } from 'react-redux';
import {
  object,
  bool,
  func,
  number,
  array,
} from 'prop-types';
import {
  withStateHandlers,
  compose,
  lifecycle,
} from 'recompose';

import {
  MainContainer,
  BackgroundImage,
} from './styles';
import Shadow from './Shadow';
import { getHistory } from '../../selectors/user';

const propTypes = {
  movie: object.isRequired,
  isSmall: bool.isRequired,
  displayShadow: bool.isRequired,
  handleChangeShadowDisplay: func.isRequired,
  pos: number.isRequired,
  moviesCount: number.isRequired,
  loadDetailsData: func.isRequired,
  handleChangeIsPreviewOpen: func.isRequired,
  history: array,
};

const MoviePreview = ({
  movie,
  displayShadow,
  isSmall,
  moviesCount,
  handleChangeShadowDisplay,
  pos,
  handleChangeIsPreviewOpen,
  loadDetailsData,
  history,
}) => (
  <MainContainer
    onMouseEnter={() => handleChangeShadowDisplay(true)}
    onMouseLeave={() => handleChangeShadowDisplay(false)}
    isSmall={isSmall}
    pos={pos}
    moviesCount={moviesCount}
  >
    {
      displayShadow &&
      <Shadow
        handleChangeIsPreviewOpen={handleChangeIsPreviewOpen}
        loadDetailsData={loadDetailsData}
        movie={movie}
        displayShadow={displayShadow}
        history={history}
      />
    }
    <BackgroundImage
      coverImage={movie.coverImage}
      displayShadow={displayShadow}
    />
  </MainContainer>
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
      isSmall: true,
    },
    {
      handleChangeShadowDisplay: () => display => ({ displayShadow: display }),
      handleChangeSize: ({ isSmall }) => () => ({ isSmall: !isSmall }),
    },
  ),
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.props.handleChangeSize();
      }, 0.2);
    },
  }),
);

export default enhance(MoviePreview);

