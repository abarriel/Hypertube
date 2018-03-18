import React from 'react';
import { array } from 'prop-types';
import { lifecycle, compose } from 'recompose';

import req from '../../request';
import {
  UsersContainer,
  Title,
} from './styles';


const propTypes = {
  users: array,
};

const Users = ({ users }) => (
  <UsersContainer>
    <Title>Users</Title>
  </UsersContainer>
);

Users.propTypes = propTypes;

export default compose(
  lifecycle({
    componentDidMount() {
    },
  }),
)(Users);
