import React from 'react';
import {
  number,
  string,
} from 'prop-types';

import {
  MetaDataContainer,
  MetaDataRating,
  MetaDataYears,
} from './styles';

const MetaData = ({
  rating,
  years,
  duration,
}) => (
  <MetaDataContainer>
    <MetaDataRating>{`Recommandé à  ${rating}%`}</MetaDataRating>
    <MetaDataYears>{years}</MetaDataYears>
    <MetaDataYears>{`${duration} min`}</MetaDataYears>
  </MetaDataContainer>
);

MetaData.propTypes = {
  rating: number.isRequired,
  years: string.isRequired,
  duration: number.isRequired,
};

export default MetaData;
