import styled from 'styled-components';
import { MAIN_COLOR } from '../../colors';

export const SectionContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.p`
  color:white;
  font-size:1.3em;
  color:${MAIN_COLOR};
  margin-left:50px;
`;
