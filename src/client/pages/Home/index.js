import React from 'react';
import { connect } from 'react-redux';
import { getGenres } from '../../selectors/movies';
import { getUser } from '../../selectors/user';
import MoviePreviewSlider from '../../components/MoviePreviewSlider';
import { HomeContainer, MainContent } from './styles';
import Section from '../../containers/Section';
import Sections from './Sections';

const Home = () => (
  <HomeContainer>
    <MainContent>
      <MoviePreviewSlider />
      {Sections.map(section => <Section key={section.id} reqParams={section.reqParams} title={section.label} />)}
    </MainContent>
  </HomeContainer>
);

const mapStateToProps = state => ({
  genres: getGenres(state),
  user: getUser(state),
});

export default connect(mapStateToProps)(Home);
