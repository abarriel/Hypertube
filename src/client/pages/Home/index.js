import React from 'react';
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

export default Home;
