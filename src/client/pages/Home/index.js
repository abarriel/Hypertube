import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getPreferredMovies,
} from '../../selectors/movies';
import MoviePreviewSlider from '../../components/MoviePreviewSlider';
import Spinner from '../../components/Spinner';
import { HomeContainer, MainContent } from './styles';
import Section from '../../containers/Section';

const Home = ({
  preferredMovies,
}) => (
  <HomeContainer>
    <MainContent>
      <MoviePreviewSlider />
      {preferredMovies.length > 0 ? <Section movies={preferredMovies} title="Les plus gros succès sur Hypertix" /> : <Spinner />}
    </MainContent>
  </HomeContainer>
);

Home.propTypes = {
  preferredMovies: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  preferredMovies: getPreferredMovies(state),
});

export default connect(mapStateToProps)(Home);
