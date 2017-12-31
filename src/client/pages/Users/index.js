import React from 'react';

import {
  UsersContainer,
  UsersContent,
  Title,
} from './styles';
import Card from '../../components/Card';

const Users = () => (
  <UsersContainer>
    <Title>Users</Title>
    <UsersContent>
      <Card width="600px" height="40px" />
      <Card width="600px" height="40px" />
      <Card width="600px" height="40px" />
      <Card width="600px" height="40px" />
      <Card width="600px" height="40px" />
      <Card width="600px" height="40px" />
      <Card width="600px" height="40px" />
      <Card width="600px" height="40px" />
      <Card width="600px" height="40px" />
      <Card width="600px" height="40px" />
      <Card width="600px" height="40px" />
    </UsersContent>
  </UsersContainer>
);

export default Users;
