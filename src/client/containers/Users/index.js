import React from 'react';
import { array } from 'prop-types';
import { map } from 'lodash';
import { lifecycle, compose, withStateHandlers } from 'recompose';

import req from '../../request';
import {
  UsersContainer,
  Title,
  UsersContent,
} from './styles';
import User from './User/index';


const propTypes = {
  users: array,
};

const Users = ({ users }) => (
  <UsersContainer>
    {console.log('users: ', users)}
    <Title>Users</Title>
    <UsersContent>
      {map(users, user => <User key={user.id} user={user} />)}
    </UsersContent>
  </UsersContainer>
);

Users.propTypes = propTypes;

export default compose(
  withStateHandlers(
    ({
      users: [],
    }),
    {
      loadUsers: () => users => ({ users }),
    },
  ),
  lifecycle({
    componentDidMount() {
      req.getUsers()
        .then(data => this.props.loadUsers(data.users));
    },
  }),
)(Users);

