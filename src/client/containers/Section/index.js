import React from 'react';
import {
  number,
  string,
  func,
  object,
  array,
} from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VisibilitySensor from 'react-visibility-sensor';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import req from '../../request';
import {
  TitleContainer,
  Title,
  SectionContainer,
  RightArrow,
  LeftArrow,
  MoviesRowContainer,
} from './styles';
import MovieRow from '../MovieRow';
import { WIDTH, MARGIN } from '../MovieRow/constants';

const goLeft = start => start - 1 >= 0 ? -1 : 0;

const goRight = (start, length, end) => {
  const newStart = start + 1;
  if (newStart + end > length + 1) {
    return 0;
  }
  return 1;
};

const onChange = (isVisible, reqParams, updateMovies, movies) => {
  if (isVisible && movies.length === 0) {
    if (reqParams) {
      req.movies(reqParams)
        .then(data => updateMovies(data.movies));
    } else {
      req.getMylist('my_list')
        .then(movies => updateMovies(movies));
    }
  }
};

const getEnd = width => Math.round((width) / (WIDTH + (2 * MARGIN)));

const Section = ({
  movies = [],
  title,
  start,
  width,
  move,
  reqParams,
  updateMovies,
}) => (
  <SectionContainer>
    <TitleContainer>
      <VisibilitySensor onChange={isVisible => onChange(isVisible, reqParams, updateMovies, movies)}>
        <Title>{title}</Title>
      </VisibilitySensor>
      <LeftArrow onClick={() => move(goLeft(start))} />
      <RightArrow onClick={() => move(goRight(start, movies.length, getEnd(width)))} />
    </TitleContainer>
    <MoviesRowContainer>
      <MovieRow
        start={start}
        width={width}
        end={getEnd(width)}
        movies={movies}
        move={move}
      />
    </MoviesRowContainer>
  </SectionContainer>
);

Section.propTypes = {
  movies: array,
  width: number.isRequired,
  title: string.isRequired,
  start: number.isRequired,
  move: func.isRequired,
  reqParams: object,
  updateMovies: func.isRequired,
};

const actions = {
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(null, mapDispatchToProps),
  withStateHandlers(
    {
      movies: [],
      start: 0,
      width: 0,
    },
    {
      move: ({ start }) => direction => ({ start: start + direction }),
      updateMovies: () => newMovies => ({ movies: newMovies }),
      updateWindowDimensions: () => () => ({ width: window.innerWidth }),
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.updateWindowDimensions();
      window.addEventListener('resize', this.props.updateWindowDimensions);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWindowDimensions);
    },
  }),
);

export default enhance(Section);
