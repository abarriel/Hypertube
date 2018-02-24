import styled from 'styled-components';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import { HEIGHT } from '../constants';

export const ArrowContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  top:0;
  ${({ direction }) => direction === 'left' && 'left: 0'};
  ${({ direction }) => direction === 'right' && 'left: calc(100vw - 8vw)'};
  height:${HEIGHT + 50}px;
  width:8vw;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));
  z-index:105;
  cursor:pointer;
  &:hover {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0));
  }
`;

export const RightArrow = styled(FaAngleRight)`
  color:white;
  font-size:2rem;
  margin:0;
`;

export const LeftArrow = styled(FaAngleLeft)`
  color:white;
  font-size:2rem;
  margin:0;
`;
