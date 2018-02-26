import styled from 'styled-components';

import { MAIN_COLOR } from '../../../colors';

export const FooterContainer = styled.div`
  position:absolute;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  right:0;
  left:0;
  bottom:0;
  z-index:10000;
`;

export const Button = styled.div`
  display:flex;
  flex-direction:column;
  color:white;
  font-weight:20;
  font-size: 1.2em;
  @media (max-width: 1399px) {
    font-size: 0.8em;
  };
  letter-spacing: 1px;
  padding: 1em 1.5em 0;
  cursor:pointer;
  text-transform: uppercase;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  user-select: none;
`;

export const Underline = styled.div`
  display:flex;
  width:100%;
  background-color:${({ color }) => color};
  margin-top: 0.66em;
  height: 0.33em;
`;
