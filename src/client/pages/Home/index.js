import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies } from '../../selectors/movies';
import Header from './Header';
import Spinner from '../../components/Spinner';
import { HomeContainer, MainContent } from './styles';
import Section from '../../containers/Section';

const Home = ({ movies }) => (
  <HomeContainer>
    <MainContent>
      <Header />
      {movies.length > 0 &&
        <div>
          <Section movies={movies} title="Nouveautés" />
          <Section movies={movies} title="Tendances actuelles" />
          <Section movies={movies} title="Les plus vus" />
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
