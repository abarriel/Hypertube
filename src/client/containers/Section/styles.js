import styled from 'styled-components';
import GoChevronLeft from 'react-icons/lib/go/chevron-left';
import GoChevronRight from 'react-icons/lib/go/chevron-right';
import { MAIN_COLOR_HOVER } from '../../colors';

export const SectionContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.p`
  color:white;
  font-size:1.1em;
  color:white;
  margin:0;
  margin-left:30px;
`;

export const RightArrow = styled(GoChevronRight)`
  color:white;
  font-size:1em;
  margin-right:5px;
  cursor:pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.5);
    color: ${MAIN_COLOR_HOVER};
  }
`;

export const LeftArrow = styled(GoChevronLeft)`
  color:white;
  font-size:1em;
  margin-left:5px;
  cursor:pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.5);
    color: ${MAIN_COLOR_HOVER};
  }
`;
