import React from 'react';
import { object, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';

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
  UpdateAvatarLogo,
} from './styles';
import Users from '../../containers/Users';
import Section from '../../containers/Section';
import { getUser } from '../../selectors/user';

const propTypes = {
  user: object,
  isAvatarHovered: bool.isRequired,
  handleChangeIsAvatarHovered: func.isRequired,
};
const Profil = ({
  user,
  isAvatarHovered,
  handleChangeIsAvatarHovered,
}) => (
  <MainContainer>
    <ProfilContainer>
      <ProfilHeader>
        <Avatar
          avatar={user.profilePicture}
          onMouseEnter={() => handleChangeIsAvatarHovered()}
          onMouseLeave={() => handleChangeIsAvatarHovered()}
        >
          {isAvatarHovered && <UpdateAvatarLogo />}
        </Avatar>
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

Profil.propTypes = propTypes;

const mapStateToProps = state => ({
  user: getUser(state),
});

export default compose(
  withStateHandlers(
    () => ({
      isAvatarHovered: false,
    }),
    {
      handleChangeIsAvatarHovered: ({ isAvatarHovered }) => () => ({ isAvatarHovered: !isAvatarHovered }),
    },
  ),
  connect(mapStateToProps),
)(Profil);
