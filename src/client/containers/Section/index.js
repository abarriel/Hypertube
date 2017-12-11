import React from 'react';
import PropTypes from 'prop-types';

import { Title, SectionContainer } from './styles';
import MovieList from '../MovieList';

const Section = ({ title }) => (
  <SectionContainer>
    <Title>{title}</Title>
    <MovieList />
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
