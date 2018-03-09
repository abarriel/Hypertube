import React, { Component } from 'react';
import req from '../../request';

import {
  MiniAvatarContainer,
  MiniAvatarImage,
  ChevDown,
} from './styles';


class MiniAvatar extends Component {

  state = {
    avatar: 'https://secure.netflix.com/ffe/profiles/avatars_v2/32x32/PICON_026.png',
  }

  componentDidMount() {
    req.getMyInfos(['profilePicture']).then(({ user }) => {
      this.setState({ avatar: user.profilePicture });
    });
  }

  render() {
    const { avatar } = this.state;
    const { displayMenu, handleChangeMenuDisplay } = this.props; // eslint-disable-line
    return (
      <MiniAvatarContainer onMouseEnter={() => handleChangeMenuDisplay(!displayMenu)}>
        <MiniAvatarImage
          avatar={avatar}
        />
        <ChevDown />
      </MiniAvatarContainer>
    );
  }
}

export default MiniAvatar;
