import React from 'react';
import {
  bool,
  array,
  number,
  func,
  string,
  object,
} from 'prop-types';
import { withStateHandlers } from 'recompose';
import { isNil } from 'lodash';

import { getMoveLength } from './utils';
import {
  MovieRowContainer,
  MovieRowContent,
  MoviePreviewContent,
} from './styles';
import MoviePreview from './MoviePreview';
import ScrollBar from './ScrollBar';
import FakePreview from './FakePreview';
import Arrows from './Arrows';
import MovieDetails from '../../containers/MovieDetails';

const getMoviesLength = movies => {
  const { length } = movies;
  if (length === 0) {
    return 1;
  }
  return length;
};

const propTypes = {
  movies: array.isRequired,
  start: number.isRequired,
  end: number.isRequired,
  width: number.isRequired,
  move: func.isRequired,
  isHover: bool.isRequired,
  handleChangeIsHover: func.isRequired,
  loadDetailsData: func.isRequired,
  resetDetailsData: func.isRequired,
  handleChangeIsPreviewOpen: func.isRequired,
  previewOpen: string,
  detailsData: object,
};

const MovieRow = ({
  movies,
  start,
  end,
  width,
  move,
  isHover,
  handleChangeIsHover,
  handleChangeIsPreviewOpen,
  previewOpen,
  detailsData,
  resetDetailsData,
  loadDetailsData,
}) => (
  <MovieRowContent
    onMouseEnter={() => handleChangeIsHover()}
    onMouseLeave={() => handleChangeIsHover()}
  >
    <ScrollBar
      start={start}
      length={getMoviesLength(movies)}
      end={end}
      width={width}
      isHover={isHover}
    />
    <MovieRowContainer
      margin={-start}
    >
      {start > 0 && isNil(detailsData) &&
        <Arrows
          start={start}
          direction="left"
          move={move}
          length={getMoviesLength(movies)}
          size={getMoveLength(width)}
          width={width}
        />}
      {movies.length > 0 ? movies.map((movie, index) =>
        (
          <MoviePreviewContent key={movie.imdbId}>
            <MoviePreview
              movie={movie}
              start={start}
              end={end}
              move={move}
              length={getMoviesLength(movies)}
              index={index}
              handleChangeIsPreviewOpen={handleChangeIsPreviewOpen}
              loadDetailsData={loadDetailsData}
            />
            <MovieDetails
              handleChangeIsPreviewOpen={handleChangeIsPreviewOpen}
              height={previewOpen === movie.imdbId ? 50 : 0}
              detailsData={detailsData}
              imdbId={movie.imdbId}
              resetDetailsData={resetDetailsData}
            />
          </MoviePreviewContent>
        )) :
      <FakePreview />}
      {start < (getMoviesLength(movies) - getMoveLength(width)) && <Arrows
        start={start}
        direction="right"
        move={move}
        length={getMoviesLength(movies)}
        size={getMoveLength(width)}
        width={width}
      />}
    </MovieRowContainer>
  </MovieRowContent>
);

MovieRow.propTypes = propTypes;

export default withStateHandlers(
  {
    isHover: false,
    previewOpen: null,
    detailsData: null,
  },
  {
    handleChangeIsPreviewOpen: () => openedPreview => ({ previewOpen: openedPreview }),
    loadDetailsData: () => data => ({ detailsData: data }),
    resetDetailsData: () => () => ({ detailsData: null }),
    handleChangeIsHover: ({ isHover }) => () => ({ isHover: !isHover }),
  },
)(MovieRow);
