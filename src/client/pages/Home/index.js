import React from 'react';
import { connect } from 'react-redux';
import {
  array,
} from 'prop-types';

import {
  getPreferredMovies,
  getrecentMovies,
} from '../../selectors/movies';
import MoviePreviewSlider from '../../components/MoviePreviewSlider';
import Spinner from '../../components/Spinner';
import { HomeContainer, MainContent } from './styles';
import Section from '../../containers/Section';

const Home = ({
  preferredMovies,
  recentMovies,
}) => (
  <HomeContainer>
    <MainContent>
      <MoviePreviewSlider />
      {recentMovies.length > 0 ? <Section movies={recentMovies} title="Nouveautés" /> : <Spinner />}
      {preferredMovies.length > 0 ? <Section movies={preferredMovies} title="Les plus gros succès sur Hypertix" /> : <Spinner />}
    </MainContent>
  </HomeContainer>
);

Home.propTypes = {
  preferredMovies: array.isRequired,
  recentMovies: array.isRequired,
};

const mapStateToProps = state => ({
  preferredMovies: getPreferredMovies(state),
  recentMovies: getrecentMovies(state),
});

export default connect(mapStateToProps)(Home);
