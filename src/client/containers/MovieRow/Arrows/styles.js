import styled from 'styled-components';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

export const ArrowContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position:absolute;
  ${({ direction }) => direction === 'left' && 'left: 0'};
  ${({ direction }) => direction === 'right' && 'left: calc(100vw - 8vw)'};
  height:340px;
  width:8vw;
  background-color:rgba(0,0,0,0.3);
  z-index:105;
  cursor:pointer;
  &:hover {
    background-color:rgba(0,0,0,0.2);
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
