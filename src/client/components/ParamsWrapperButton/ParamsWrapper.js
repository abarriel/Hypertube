import React from 'react';
import {
  array,
  func,
} from 'prop-types';
import { connect } from 'react-redux';

import { getGenres } from '../../selectors/movies';
import {
  ParamsWrapperContainer,
  Genre,
} from './styles';

const ParamsWrapper = ({
  genres,
  handleChangeWrapped,
}) => (
  <ParamsWrapperContainer onMousLeave={console.log('couccou')}>
    {genres.map(genre => (
      <Genre>
        {genre.toLowerCase()}
      </Genre>
    ))}
  </ParamsWrapperContainer>
);

ParamsWrapper.propTypes = {
  genres: array.isRequired,
  handleChangeWrapped: func.isRequired,
};

const mapStateToProps = state => ({
  genres: getGenres(state),
});

export default connect(mapStateToProps)(ParamsWrapper);
