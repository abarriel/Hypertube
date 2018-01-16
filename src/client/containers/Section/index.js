import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withStateHandlers, lifecycle } from 'recompose';

import { reqMovies } from '../../request';
import {
  TitleContainer,
  Title,
  SectionContainer,
  RightArrow,
  LeftArrow,
  MoviesRowContainer,
} from './styles';
import MovieRow, { FakeRow } from '../MovieRow';
import { WIDTH, MARGIN } from '../MovieRow/constants';

const goLeft = start => start - 1 >= 0 ? -1 : 0;

const goRight = (start, length, end) => {
  const newStart = start + 1;
  if (newStart + end > length + 1) {
    return 0;
  }
  return 1;
};

const getEnd = width => Math.round((width - 25) / (WIDTH + (2 * MARGIN)));

const Section = ({
  movies = [],
  title,
  start,
  width,
  move,
}) => (
  <SectionContainer>
    <TitleContainer>
      <Title>{title}</Title>
      <LeftArrow onClick={() => move(goLeft(start))} />
      <RightArrow onClick={() => move(goRight(start, movies.length, getEnd(width)))} />
    </TitleContainer>
    <MoviesRowContainer>
      {movies.length === 0 && (
        <FakeRow />
      )}
      {movies.length > 0 && <MovieRow
        start={start}
        width={width}
        end={getEnd(width)}
        movies={movies}
        move={move}
      />}
    </MoviesRowContainer>
  </SectionContainer>
);

Section.propTypes = {
  movies: PropTypes.array,
  width: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  move: PropTypes.func.isRequired,
};

const actions = {
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({

});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
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
      reqMovies(this.props.reqParams)
        .then(data => this.props.updateMovies(data.movies));
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWindowDimensions);
    },
  }),
);

export default enhance(Section);
