import React from 'react';
import {
  NotFoundCardContainer,
  NotFoundCardLink,
} from './styles';

const NotFoundCard = () => (
  <NotFoundCardContainer>
    {'Sorry, we can\'t find an account with this email address. Please try again or '}
    <NotFoundCardLink to="/register">create a new account</NotFoundCardLink>
  </NotFoundCardContainer>
);

export default NotFoundCard;
