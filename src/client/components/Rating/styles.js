import styled from 'styled-components';
import { MAIN_COLOR } from '../../colors';

export const RatingContainer = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  width:100%;
  height:30px;
  opacity: ${({ opacity }) => opacity};
  transition: all 1.3s;
  transition-delay: 1.4s;
  margin-top:10px;
`;

export const Full = styled.div`
  width:13px;
  height:13px;
  border-radius:100%;
  border-style: solid;
  border-width: 3px;
  border-color:white;
  background-color:${MAIN_COLOR};
`;

export const Empty = styled.div`
  width:13px;
  height:13px;
  border-radius:100%;
  border-style: solid;
  border-width: 3px;
  border-color:white;
`;
