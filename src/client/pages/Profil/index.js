import React, { Component } from 'react';
import { object, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { compose, withStateHandlers } from 'recompose';
import req from '../../request';

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
  InputFile,
} from './styles';
import Users from '../../containers/Users';
import Section from '../../containers/Section';
import { getUser } from '../../selectors/user';

const propTypes = {
  user: object,
  isAvatarHovered: bool.isRequired,
  handleChangeIsAvatarHovered: func.isRequired,
};
class Profil extends Component {
  state = {
    profilePicture: undefined,
  }
  handleChange = async ({ target: { files } }) => {
    const file = files[0];
    if (!file) return false;
    const img = new Image();
    img.onload = () => {
      const bodyFormData = new FormData();
      req.editUser(bodyFormData).catch(e => console.log(e));
    };
    const _URL = window.URL || window.webkitURL;
    img.src = _URL.createObjectURL(file);
  }
  render() {
    const {
      user,
      isAvatarHovered,
      handleChangeIsAvatarHovered,
    } = this.props;

    return (
      <MainContainer>
        {console.log(this.state.profilePicture)}
        <ProfilContainer>
          <ProfilHeader>
            <Avatar
              avatar={user.profilePicture}
              onMouseEnter={() => handleChangeIsAvatarHovered()}
              onMouseLeave={() => handleChangeIsAvatarHovered()}
            >
              <InputFile type="file" accept="image/*" id="profilePicture" onChange={this.handleChange} />
              <label htmlFor="profilePicture">
                {isAvatarHovered && <UpdateAvatarLogo />}
              </label>
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
  }
}

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
