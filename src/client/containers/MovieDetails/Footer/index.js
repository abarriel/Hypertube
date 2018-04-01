import React from 'react';
import {
  number,
  func,
} from 'prop-types';
import {
  FooterContainer,
  Button,
  Underline,
} from './styles';

const Footer = ({
  selectedSlide,
  handleChangeSelectedSlide,
}) => (
  <FooterContainer>
    <Button onClick={() => handleChangeSelectedSlide(0)}>
      Presentation
      <Underline color={selectedSlide === 0 ? '#e50914' : 'rgba(0,0,0,0)'} />
    </Button>
    <Button onClick={() => handleChangeSelectedSlide(1)}>
      Comments
      <Underline color={selectedSlide === 1 ? '#e50914' : 'rgba(0,0,0,0)'} />
    </Button>
  </FooterContainer>
);

Footer.propTypes = {
  selectedSlide: number.isRequired,
  handleChangeSelectedSlide: func.isRequired,
};

export default Footer;
