import React from 'react';

import {
  ProfilContainer,
  ProfilHeader,
  Avatar,
  Name,
} from './styles';

const fakeProfil = {
  firstName: 'Lucas',
  lastName: 'Charvolin',
  avatar: 'https://cdn.intra.42.fr/users/medium_lcharvol.jpg',
};

const Profil = ({ profil = fakeProfil }) => (
  <ProfilContainer>
    <ProfilHeader>
      <Avatar avatar={profil.avatar}/>
      <Name>{`${profil.firstName} ${profil.lastName}`}</Name>
    </ProfilHeader>
  </ProfilContainer>
);

export default Profil;
