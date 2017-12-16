import React from 'react';
import PropTypes from 'prop-types';
import { withStateHandlers } from 'recompose';

import {
  TitleContainer,
  Title,
  SectionContainer,
  RightArrow,
  LeftArrow,
} from './styles';
import MovieRow from '../MovieRow';

const Section = ({
  title,
  start,
  handleGoLeft,
  handleGoRight,
}) => (
  <SectionContainer>
    <TitleContainer>
      <Title>{title}</Title>
      <LeftArrow onClick={() => handleGoLeft(start - 1)} />
      <RightArrow onClick={() => handleGoRight(start + 1)} />
    </TitleContainer>
    <MovieRow start={start} />
  </SectionContainer>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.number.isRequired,
  handleGoLeft: PropTypes.func.isRequired,
  handleGoRight: PropTypes.func.isRequired,
};

const enhance = withStateHandlers(
  {
    start: 0,
  },
  {
    handleGoLeft: () => newStart => ({ start: newStart >= 0 ? newStart : 0}),
    handleGoRight: () => newStart => ({ start: newStart }),
  },
);

export default enhance(Section);
