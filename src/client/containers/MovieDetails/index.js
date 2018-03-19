import React from 'react';
import {
  func,
  number,
  object,
  string,
  array,
} from 'prop-types';
import { connect } from 'react-redux';
import { withStateHandlers, compose } from 'recompose';
import { bindActionCreators } from 'redux';

import {
  MovieDetailsContainer,
  FakeMovieDetailsContainer,
  Closer,
  CoverImage,
  Title,
  Shadow,
  GradientShadow,
  ButtonsContainer,
  DetailsContent,
  Synopsis,
  YouTubeContainer,
  Cross,
} from './styles';
import PlayButton from '../../components/PlayButton';
import MetaList from './MetaList';
import MetaData from './MetaData';
import FakeShadow from './FakeShadow';
import Footer from './Footer/index';
import AddListButton from '../../components/AddListButton';
import Comments from '../../containers/Comments';
import { getUserList } from '../../selectors/user';
import { updateUserList } from '../../actions/user';

const propTypes = {
  handleChangeIsPreviewOpen: func.isRequired,
  height: number.isRequired,
  detailsData: object,
  imdbId: string,
  resetDetailsData: func.isRequired,
  selectedSlide: number.isRequired,
  handleChangeSelectedSlide: func.isRequired,
  myList: array,
  updateUserList: func.isRequired,
};

const MovieDetails = ({
  handleChangeIsPreviewOpen,
  height,
  detailsData,
  imdbId,
  resetDetailsData,
  selectedSlide,
  handleChangeSelectedSlide,
  myList,
  updateUserList,
}) => {
  const opts = {
    height: '100%',
    width: '80%',
    playerVars: {
      showinfo: 0,
      controls: 0,
      loop: 1,
      modestbranding: 0,
      rel: 0,
    },
  };
  return (
    <FakeMovieDetailsContainer height={height}>
      {(detailsData && selectedSlide !== -1 && imdbId === detailsData.movie.imdbId) &&
        <MovieDetailsContainer height={height}>
          {selectedSlide === 0 && <FakeShadow />}
          {selectedSlide === 0 &&
            <Shadow>
              <Title>{detailsData.movie.title}</Title>
              <DetailsContent>
                <MetaData
                  rating={detailsData.movie.score}
                  years={detailsData.movie.firstAired}
                  duration={detailsData.movie.runtime}
                />
                <Synopsis>
                  {detailsData.movie.summary.slice(0, 400)}
                  {detailsData.movie.summary.length > 400 && '...'}
                </Synopsis>
                <ButtonsContainer>
                  <PlayButton to={`/video/${detailsData.movie.imdbId}`} />
                  {detailsData.movie.type === 'movie' &&
                    <AddListButton
                      movieId={detailsData.movie.imdbId}
                      myList={myList}
                      initialIsAdded
                      updateUserList={updateUserList}
                    />
                  }
                </ButtonsContainer>
                <MetaList
                  info={detailsData.movie.actors || detailsData.movie.seasons}
                  type={detailsData.movie.type}
                  genres={detailsData.movie.genres}
                  production={detailsData.movie.production}
                />
              </DetailsContent>
            </Shadow>}
          {!selectedSlide && <GradientShadow />}
          {!selectedSlide && detailsData.movie.type === 'shows' && <CoverImage height={height} image={detailsData.movie.backgroundImage} />}
          {!selectedSlide && detailsData.movie.type === 'movie' &&
            <CoverImage height={height}>
              <YouTubeContainer
                videoId={detailsData.movie.trailer}
                onReady={event => event.target.playVideo()}
                opts={opts}
              />
            </CoverImage>
          }
          {selectedSlide === 1 &&
            <Comments height={height} imdbId={imdbId} />
          }
          <Cross
            onClick={() => {
              handleChangeIsPreviewOpen();
              resetDetailsData();
            }}
          />
          <Footer
            selectedSlide={selectedSlide}
            handleChangeSelectedSlide={handleChangeSelectedSlide}
          />
        </MovieDetailsContainer>
      }
      {height !== 0 &&
        <Closer onClick={() => {
          handleChangeIsPreviewOpen();
          resetDetailsData();
          }}
        />
      }
    </FakeMovieDetailsContainer>
  );
};

MovieDetails.propTypes = propTypes;


const actions = { updateUserList };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


const mapStateToProps = state => ({
  myList: getUserList(state),
});


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(
    {
      selectedSlide: 0,
    },
    {
      handleChangeSelectedSlide: () => newSelectedSlide => ({ selectedSlide: newSelectedSlide }),
    },
  ),
)(MovieDetails);
