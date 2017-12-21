import React from 'react';
import { number, func } from 'prop-types';

import { PagerContainer, PagerElem } from './styles';
import { images } from './images';

const Pager = ({ position, handleChangePosition }) => (
  <PagerContainer>
    {images.map(image => (
      <PagerElem
        key={image.id}
        selected={position === image.id}
        onClick={() => handleChangePosition(image.id)}
      />
    ))}
  </PagerContainer>
);

Pager.propTypes = {
  position: number.isRequired,
  handleChangePosition: func.isRequired,
};

export default Pager;
