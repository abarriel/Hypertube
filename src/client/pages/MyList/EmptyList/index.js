import React from 'react';
import {
  EmptyListContainer,
  EmptyIcon,
  EmptyLabel,
} from './styles';

const EmptyList = () => (
  <EmptyListContainer>
    <EmptyIcon />
    <EmptyLabel>{'Their\'s no movie in your list !'}</EmptyLabel>
  </EmptyListContainer>
);

export default EmptyList;
