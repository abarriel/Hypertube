import React from 'react';
import {
  array,
  func,
} from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import req from '../../request';
import {
  updateMovies,
  resetMovies,
} from '../../actions/movies';
import {
  RatingWrapperContainer,
  RatingWrapperOverlay,
  Genre,
} from './styles';

const ratingTab = [
  {
    id: 0,
    value: 0,
  },
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
  {
    id: 4,
    value: 4,
  },
  {
    id: 5,
    value: 5,
  },
];

const GenresWrapper = ({
  handleChangeWrapped,
  updateMovies,
  resetMovies,
}) => (
  <RatingWrapperOverlay>
    <RatingWrapperContainer>
      {ratingTab.map(rating => (
        <Genre
          key={rating.id}
          onClick={() => {
            req.movies({limit: 25, offset: 0, rating: rating.value })
              .then(data => {
                resetMovies();
                updateMovies(data);
              });
        }}>
          {rating.value}
        </Genre>
      ))}
    </RatingWrapperContainer>
  </RatingWrapperOverlay>
);

GenresWrapper.propTypes = {
  handleChangeWrapped: func.isRequired,
  resetMovies: func.isRequired,
};

const actions = { updateMovies, resetMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(null, mapDispatchToProps)(GenresWrapper);
