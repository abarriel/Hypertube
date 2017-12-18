import styled from 'styled-components';
import GoSignOut from 'react-icons/lib/go/sign-out';
import { MAIN_COLOR, MAIN_COLOR_HOVER } from '../../colors';

export const LogoutButtonContainer = styled(GoSignOut)`
  position:absolute;
  top:40px;
  right:30px;
  color:white;
  font-size:1.7em;
  cursor:pointer;
`;