import React from 'react';
import {
  number,
  string,
} from 'prop-types';
import { isNil } from 'lodash';

import {
  MetaDataContainer,
  MetaDataRating,
  MetaDataYears,
} from './styles';
import { getColor } from '../../utils';

const MetaData = ({
  rating = undefined,
  years,
  duration,
}) => (
  <MetaDataContainer>
    <MetaDataRating color={getColor(rating, 0, 100)}>
      {!isNil(rating) ? `Recommandé à  ${rating}%` : 'Pas encore recommandé'}
    </MetaDataRating>
    <MetaDataYears>{years}</MetaDataYears>
    <MetaDataYears>{`${duration} min`}</MetaDataYears>
  </MetaDataContainer>
);

MetaData.propTypes = {
  rating: number,
  years: string.isRequired,
  duration: number.isRequired,
};

export default MetaData;
