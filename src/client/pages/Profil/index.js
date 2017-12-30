import React from 'react';
import { object } from 'prop-types';

import {
  ProfilContainer,
  ProfilHeader,
  Avatar,
  Name,
} from './styles';
import Card from '../../components/Card';

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
    <Card />
  </ProfilContainer>
);

Profil.propTypes = {
  profil: object,
};

export default Profil;
