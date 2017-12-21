import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies, getPreferedMovies, getRecentMovies } from '../../selectors/movies';
import MoviePreviewSlider from '../../components/MoviePreviewSlider';
import Spinner from '../../components/Spinner';
import { HomeContainer, MainContent } from './styles';
import Section from '../../containers/Section';
import MiniAvatar from '../../components/MiniAvatar';

const Home = ({ movies }) => (
  <HomeContainer>
    <MiniAvatar />
    <MainContent>
      <MoviePreviewSlider />
      {movies.length > 0 &&
        <div>
          <Section movies={getRecentMovies(movies)} title="Nouveautés" />
          <Section movies={getPreferedMovies(movies)} title="Les plus vus" />
          <Section movies={movies} title="Tendances actuelles" />
        </div>
      }
      {movies.length <= 0 && <Spinner />}
    </MainContent>
  </HomeContainer>
);

Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  movies: getMovies(state),
});

export default connect(mapStateToProps)(Home);
