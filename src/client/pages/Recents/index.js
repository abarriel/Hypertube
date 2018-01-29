import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import { map } from 'lodash';
import {
  array,
} from 'prop-types';
import {
  RecentsContainer,
} from './styles';
import { getRecentMovies } from '../../selectors/movies';
import { loadRecentMovies } from '../../actions/movies';

const Recents = ({
  recentMovies,
}) => (
  <RecentsContainer>
    {map(recentMovies, movie => (
      <div />
    ))}
  </RecentsContainer>
);

Recents.propTypes = {
  recentMovies: array.isRequired,
};

const actions = { loadRecentMovies };
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  recentMovies: getRecentMovies(state),
});

const enhance = compose(

  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentWillMount() {
      this.props.loadRecentMovies();
    },
  }),
);

export default enhance(Recents);
