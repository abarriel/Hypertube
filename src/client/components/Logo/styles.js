import styled from 'styled-components';
import { MAIN_COLOR } from '../../colors';

export const LogoContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:70px;
`;

export const Bar1 = styled.div`
  display:flex;
  height:13px;
  width:90%;
  background-color: ${MAIN_COLOR};
  border-radius:100px;
`;

export const Bar2 = styled.div`
  position:absolute;
  display:flex;
  height:65px;
  width:13px;
  right:22px;
  background-color: ${MAIN_COLOR};
  border-radius:100px;
`;

export const Bar3 = styled.div`
  position:absolute;
  display:flex;
  height:65px;
  width:13px;
  left:22px;
  background-color: ${MAIN_COLOR};
  border-radius:100px;
`;
