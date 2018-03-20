import React from 'react';
import { object } from 'prop-types';
import { connect } from 'react-redux';

import {
  ProfilContainer,
  ProfilHeader,
  ProfilContent,
  Avatar,
  Name,
  MainContainer,
  Label,
  Text,
  ProfilElem,
  EditProfilButton,
  EditProfilLogo,
  Shadow,
} from './styles';
import Users from '../../containers/Users';
import Section from '../../containers/Section';
import { getUser } from '../../selectors/user';

const Profil = ({ user }) => (
  <MainContainer>
    <ProfilContainer>
      <ProfilHeader>
        <Avatar avatar={user.profilePicture} />
        <Name>{`${user.firstName} ${user.lastName}`}</Name>
        <EditProfilButton to="editprofil">
          <EditProfilLogo />
        </EditProfilButton>
      </ProfilHeader>
      <ProfilContent>
        <ProfilElem>
          <Label>Login</Label>
          <Text>{user.username}</Text>
        </ProfilElem>
        <ProfilElem>
          <Label>Email</Label>
          <Text>{user.email}</Text>
        </ProfilElem>
        <ProfilElem>
          <Label>View</Label>
          <Text>{user.history && user.history.length}</Text>
        </ProfilElem>
      </ProfilContent>
    </ProfilContainer>
    <Shadow>
      <Section title="My List" />
    </Shadow>
    <Users></Users>
  </MainContainer>
);

Profil.propTypes = {
  user: object,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(Profil);
