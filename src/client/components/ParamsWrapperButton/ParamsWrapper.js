import React from 'react';
import {
  array,
  func,
} from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { reqMovies } from '../../request';
import { updateMovies } from '../../actions/movies';
import { getGenres } from '../../selectors/movies';
import {
  ParamsWrapperContainer,
  ParamsWrapperOverlay,
  Genre,
} from './styles';

const ParamsWrapper = ({
  genres,
  handleChangeWrapped,
  updateMovies,
}) => (
  <ParamsWrapperOverlay>
    <ParamsWrapperContainer>
      {genres.map(genre => (
        <Genre onClick={() => {
          reqMovies({limit: 25, offset: 0, genres: genre })
            .then(data => updateMovies(data, genre));
        }}>
          {genre.toLowerCase()}
        </Genre>
      ))}
    </ParamsWrapperContainer>
  </ParamsWrapperOverlay>
);

ParamsWrapper.propTypes = {
  genres: array.isRequired,
  handleChangeWrapped: func.isRequired,
};

const mapStateToProps = state => ({
  genres: getGenres(state),
});

const actions = { updateMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ParamsWrapper);
