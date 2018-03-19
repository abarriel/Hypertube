import React from 'react';
import { object } from 'prop-types';

import {
  UserContainer,
  Avatar,
  Text,
  Label,
  Section,
} from './styles';

const propTypes = {
  user: object.isRequired,
};

const User = ({ user }) => (
  <UserContainer>
    <Avatar avatar={user.profilePicture} />
    <Section>
      <Label>Name :</Label>
      <Text>{`${user.firstName} ${user.lastName}`}</Text>
    </Section>
    <Section>
      <Label>Login :</Label>
      <Text>{user.username}</Text>
    </Section>
    <Section>
      <Label>View :</Label>
      <Text>{user.history.length}</Text>
    </Section>
  </UserContainer>
);

User.propTypes = propTypes;

export default User;
