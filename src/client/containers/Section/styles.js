import styled from 'styled-components';
import GoChevronLeft from 'react-icons/lib/go/chevron-left';
import GoChevronRight from 'react-icons/lib/go/chevron-right';
import { MAIN_COLOR_HOVER } from '../../colors';

export const SectionContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 3vw 0;
`;

export const TitleContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.p`
  margin:0;
  margin-left:30px;
  user-select: none;
  line-height: 1.25vw;
  font-size: 1.em;
  color: #e5e5e5;
  font-weight: 700;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
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

export const MoviesRowContainer = styled.div`
  display:flex;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  flex:1;
  min-width:100%;
  height:405px;
`;
