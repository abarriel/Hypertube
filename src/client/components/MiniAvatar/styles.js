import styled from 'styled-components';

import { MAIN_COLOR } from '../../colors';

export const MiniAvatarContainer = styled.div`
  position:fixed;
  left:calc(100vw - 100px);
  top:25px;
  width:60px;
  height:60px;
  border-radius:100%;
  z-index:10000;
  background-image:${({ avatar }) => `url(${avatar})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 30px 1px rgba(0,0,0,0.4);
  cursor:pointer;
  overflow:hidden;
`;

export const Shadow = styled.div`
  display:flex;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.2);
`;

export const MiniAvatarPopOver = styled.div`
  display:flex;
`;
