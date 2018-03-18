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
} from './styles';
import Users from '../../containers/Users';
import { getUser } from '../../selectors/user';

const Profil = ({ user }) => (
  <MainContainer>
    <ProfilContainer>
      <ProfilHeader>
        <Avatar avatar={user.profilePicture} />
        <Name>{`${user.firstName} ${user.lastName}`}</Name>
        <EditProfilButton />
      </ProfilHeader>
      <ProfilContent>
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
